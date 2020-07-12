import * as React from "react";
import SlideButton from "../Button/SlideButton";
import useSliding from "../../hooks/useSliding";
import useSizeElement from "../../hooks/useSizeElement";

import SvgChevronRight from "../svg/ChevronRight";
import SvgChevronLeft from "../svg/ChevronLeft";

export const SliderContext: React.Context<any> = React.createContext(null);

interface ISliderProps {
    className?: string;
}

const Slider: React.FunctionComponent<ISliderProps> = (props) => {
    const { width, elementRef } = useSizeElement();
    const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } = useSliding(width, React.Children.count(props.children));

    const contextValue = {
        elementRef,
    };

    return (
        <SliderContext.Provider value={contextValue}>
            <div className={`slider__wrapper ${props.className}`}>
                <div ref={containerRef} className="slider__container" {...slideProps}>
                    {props.children}
                </div>
                {hasPrev && (
                    <SlideButton onClick={handlePrev} type="--back">
                        <SvgChevronLeft height="40px" width="40px" />
                    </SlideButton>
                )}
                {hasNext && (
                    <SlideButton onClick={handleNext} type="--next">
                        <SvgChevronRight height="40px" width="40px" />
                    </SlideButton>
                )}
            </div>
        </SliderContext.Provider>
    );
};

Slider.defaultProps = {
    className: "",
};

export default Slider;
