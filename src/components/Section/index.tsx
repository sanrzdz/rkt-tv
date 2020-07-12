import * as React from "react";
import { ISectionItem } from "./ISectionItem";
import { observer } from "mobx-react";
import Slider from "../Slider";
import SliderItem from "../Slider/Item";
import Loader from "../Loader/Loader";

export interface ISectionProps {
    title: string;
    items: ISectionItem[];
    className?: string;
}

const Section: React.FunctionComponent<ISectionProps> = observer((props) => {
    if (!props.items) return <Loader />;

    return (
        <div className="section">
            <h2 className="section__title">{props.title}</h2>
            <div className="section__list">
                <Slider>
                    {props.items.map((item) => (
                        <SliderItem key={item.id} item={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
});

export default Section;
