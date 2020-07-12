import { ISectionItem } from "./ISectionItem";

export interface ISection {
    id: string;
    title: string;
    items: ISectionItem[];
    loading?: boolean;
}
