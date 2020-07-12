import { ISection } from "../../components/Section/ISection";
import { IRakutenApi } from "../../services/rakuten.api";
import { observable, action } from "mobx";
import { homePageSections } from "../../constants";

export interface IHomeModel {
    sectionsId: string[];
    sections: ISection[];
    setSections: () => void;
    loadSections: () => void;
}

export default class HomeModel implements IHomeModel {
    sectionsId: string[];
    @observable.ref sections: ISection[] = [];
    provider: IRakutenApi;

    constructor(provider: IRakutenApi) {
        this.provider = provider;
        this.setSections();
        this.loadSections();
    }

    setSections = () => {
        this.sectionsId = homePageSections;
    };

    @action
    loadSections = async () => {
        this.sections = await Promise.all(this.sectionsId.map((listId) => this.provider.getList(listId)));
    };
}
