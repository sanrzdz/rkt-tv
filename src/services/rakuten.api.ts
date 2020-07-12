import { IMovie } from "../typings/IMovie";
import { ISection } from "../components/Section/ISection";
import { ISectionItem } from "../components/Section/ISectionItem";
import { apiHost } from "../constants";

export interface IRakutenApi {
    getList(id: string): Promise<ISection>;
    getMovie(id: string): Promise<IMovie>;
    getTrailer(id: string): Promise<any>;
}

export default class RakutenApi implements IRakutenApi {

    async getList(id: string): Promise<ISection> {
        let response = await fetch(`${apiHost}/v3/lists/${id}?classification_id=5&device_identifier=web&locale=es&market_code=es`);

        if (response.status == 200) {
            let json = await response.json();
            return this.parseJsonToSection(json.data);
        }

        console.log(`Error section ${id}:`, response.statusText);
        return null;
    }

    async getMovie(id: string): Promise<IMovie> {
        let response = await fetch(`${apiHost}/v3/movies/${id}?classification_id=5&device_identifier=web&locale=es&market_code=es`);

        if (response.status == 200) {
            let json = await response.json();
            return this.parseJsonToMovie(json.data);
        }

        console.log("Error:", response.statusText);
        return null;
    }

    async getTrailer(id: string): Promise<any> {
        let payload = {
            audio_language: "SPA",
            audio_quality: "2.0",
            content_id: id,
            content_type: "movies",
            device_serial: "device_serial_1",
            device_stream_video_quality: "FHD",
            player: "web:PD-NONE",
            subtitle_language: "MIS",
            video_type: "trailer",
        };
        let config: RequestInit = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        };
        let response = await fetch(`${apiHost}/v3/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es`, config);

        if (response.status == 200) {
            let json = await response.json();

            return json.data.stream_infos[0];
        }

        console.log("Error:", response.statusText);
        return null;
    }

    private parseJsonToSection = (data: JSON): ISection => {
        let result: ISection = {
            id: data["id"],
            title: data["name"],
            items: (data["contents"]["data"] as any[]).map((item) => this.parseJsonToSectionItem(item)),
        };

        return result;
    };

    private parseJsonToSectionItem = (data: JSON): ISectionItem => {
        let result: ISectionItem = {
            id: data["id"],
            title: data["title"],
            image: data["images"]["artwork"],
        };

        return result;
    };

    private parseJsonToMovie = (data: JSON): IMovie => {
        let result: IMovie = {
            id: data["id"],
            title: data["title"],
            plot: data["plot"],
            snapshot: data["images"]['snapshot']
        };

        return result;
    };
}
