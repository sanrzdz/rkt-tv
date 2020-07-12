import { IRakutenApi } from "../../services/rakuten.api";
import { IMovie } from "../../typings/IMovie";
import { observable } from "mobx";
import { RouteComponentProps } from "react-router-dom";

export interface IDetailModel {
    movieId: string;
    movie: IMovie;
    loadMovie: () => void;
    goBack: () => void;
}

export default class DetailModel implements IDetailModel {
    @observable.ref movie: IMovie = null;
    movieId: string;
    provider: IRakutenApi;
    goBack: () => void;

    constructor(routeProps: RouteComponentProps, provider: IRakutenApi) {
        this.provider = provider;
        this.movieId = routeProps.match.params["id"];
        this.goBack = routeProps.history.goBack;
        this.loadMovie();
    }

    
    loadMovie = async () => {
        this.movie = await this.provider.getMovie(this.movieId);
    };
}
