import * as React from "react";

export interface INavbarProps {
    title: string | React.ReactNode;
    className?: string;
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    return (
        <div className={`navbar ${props.className}`}>
            <div className="navbar__items">
                <div className="navbar__items__title">{props.title}</div>
            </div>
        </div>
    );
};

Navbar.defaultProps = {
    className: "",
};

export default Navbar;
