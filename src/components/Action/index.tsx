import * as React from "react";
import { IButtonProps } from "../Button/IButtonProps";
import { Link } from "react-router-dom";

export interface IActionProps extends IButtonProps {
    href?: string;
    externalUrl?: string;
    type?: "rounded" | "squared";
}

const Action: React.FunctionComponent<IActionProps> = (props) => {
    return props.href ? (
        <Link
            target={props.target}
            title={props.title || ""}
            className={`action action--${props.type} ${props.className || ""} `}
            to={props.href || ""}
            onClick={props.onClick}
        >
            {props.children}
        </Link>
    ) : (
        <a target={props.target} title={props.title || ""} className={`${props.className || ""} action--${props.type}`} href={props.externalUrl || ""}>
            {props.children}
        </a>
    );
};

Action.defaultProps = {
    type: "rounded",
};

export default Action;
