import * as React from "react";
import { IButtonProps } from "./IButtonProps";

interface ISlideButtonProps extends IButtonProps {}

const SlideButton: React.FunctionComponent<ISlideButtonProps> = (props) => (
    <button className={`btb btn--slider btn--slider${props.type}`} onClick={props.onClick}>
        {props.children}
    </button>
);

export default SlideButton;
