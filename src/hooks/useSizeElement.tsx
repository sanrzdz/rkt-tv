import { useState, useRef, useEffect } from "react";

type Hook = () => { width: number; elementRef: React.MutableRefObject<any> };

const useSizeElement: Hook = () => {
    const elementRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(elementRef.current.clientWidth);
    }, [elementRef]);

    return { width, elementRef };
};

export default useSizeElement;
