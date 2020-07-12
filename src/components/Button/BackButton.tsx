import * as React from "react";
import { IButtonProps } from "./IButtonProps";
import SvgChevronLeft from "../svg/ChevronLeft";

interface IBackButtonProps extends IButtonProps {}

const BackButton: React.FunctionComponent<IBackButtonProps> = (props) => {
    return (
        <div className={`btn btn--back ${props.className}`} onClick={props.onClick}>
            <SvgChevronLeft height="30px" width="30px" />
            {props.title ? <span className="btn__label">{props.title}</span> : null}
        </div>
    );
};

BackButton.defaultProps = {
    className: "",
};

export default BackButton;
