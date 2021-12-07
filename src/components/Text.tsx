import { FC } from "react";
import { AppStyle, margin } from "../AppStyle";
import { BaseHTMLProps } from "./Props";

const TextView:FC<BaseHTMLProps> = (props) => {
    return <p style={AppStyle(margin(0), props.style)}>{props.children}</p>
}

export default TextView