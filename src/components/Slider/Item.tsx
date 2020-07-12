import * as React from "react";
import { SliderContext } from ".";
import { ISectionItem } from "../Section/ISectionItem";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export interface ISliderItemProps {
    item: ISectionItem;
}

const SliderItem: React.FunctionComponent<ISliderItemProps> = (props) => {
    const { item } = props;

    return (
        <SliderContext.Consumer>
            {({ elementRef }) => {
                return (
                    <Link to={`/movies/${item.id}`} ref={elementRef} className="slider__item">
                        <LazyLoadImage className="slider__item__image" src={item.image} alt={item.title} title={item.title} effect="blur" />
                        <div className="highlighted"></div>
                    </Link>
                );
            }}
        </SliderContext.Consumer>
    );
};

export default SliderItem;
