import * as React from "react";
import SvgSpiner from "../svg/Spiner";

const Loader: React.FunctionComponent<any> = (props) => {
    return (
        <div className="loader">
            <SvgSpiner className="loader__spinner" height="56px" width="56px" />
        </div>
    );
};

export default Loader;
