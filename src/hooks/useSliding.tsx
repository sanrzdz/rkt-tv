import { useState, useRef, useEffect } from "react";

const PADDINGS = 0;

type Hook = (
    elementWidth: number,
    countElements
) => {
    handlePrev: () => void;
    handleNext: () => void;
    slideProps: any;
    containerRef: React.MutableRefObject<any>;
    hasPrev: boolean;
    hasNext: boolean;
};

const useSliding: Hook = (elementWidth, countElements) => {
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [distance, setDistance] = useState(0);
    const [totalInViewport, setTotalInViewport] = useState(0);
    const [viewed, setViewed] = useState(0);

    useEffect(() => {
        const containerWidth = containerRef.current.clientWidth - PADDINGS;

        setContainerWidth(containerWidth);
        setTotalInViewport(Math.floor(containerWidth / elementWidth));
    }, [containerRef.current]);

    const handlePrev = () => {
        setViewed(viewed - totalInViewport);
        setDistance(distance + containerWidth - (containerWidth - (totalInViewport * elementWidth)));
    };

    const handleNext = () => {
        setViewed(viewed + totalInViewport);
        setDistance(distance - containerWidth + (containerWidth - (totalInViewport * elementWidth)));
    };

    const slideProps = {
        style: { transform: `translateX(${distance}px)` },
    };

    const hasPrev = distance < 0;
    const hasNext = viewed + totalInViewport < countElements;

    return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
