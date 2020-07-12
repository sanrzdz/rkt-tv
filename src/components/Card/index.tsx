import * as React from "react";

export interface ICardProps {
    className?: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
    return <div className={`card ${props.className}`}>{props.children}</div>;
};

Card.defaultProps = {
    className: "",
};
export default Card;
