import React, { ReactNode } from "react";
import "./components.css";

interface ButtonProps {
    children: ReactNode;
    btnType?:
        | "primary"
        | "secondary"
        | "info"
        | "warning"
        | "danger"
        | "success"
        | "outline-primary"
        | "outline-secondary"
        | "outline-info"
        | "outline-warning"
        | "outline-danger"
        | "outline-success";
    onSelect?: () => void;
    ref?: React.RefObject<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, btnType = "primary", onSelect, ref }) => {
    return (
        <>
            <div className="cursor-p">
                <button className={`btn btn-${btnType}`}>{children}</button>
            </div>
        </>
    );
};

export default Button;
