import { RouteComponentProps } from "react-router-dom";
import RakutenApi, { IRakutenApi } from "../../services/rakuten.api";
import { observable } from "mobx";

export interface IPlayerModel {
    movieId: string;
    video: any;
    loadVideo: () => void;
    goBack: () => void;
}

export default class PlayerModel implements IPlayerModel {
    movieId: string;
    goBack: () => void;
    @observable.ref video: any = null;
    provider: IRakutenApi;

    constructor(routeProps: RouteComponentProps) {
        this.provider = new RakutenApi();
        this.movieId = routeProps.match.params["id"];
        this.goBack = routeProps.history.goBack;
        this.loadVideo();
    }

    loadVideo = async () => {
        this.video = await this.provider.getTrailer(this.movieId);
    };
}
