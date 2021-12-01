import { FC } from "react";
import { AppStyle, margin } from "../AppStyle";
import { ElementProps } from "./Props";

const TextView:FC<ElementProps> = (props) => {
    return <p style={AppStyle(margin(0), props.style)}>{props.children}</p>
}

export default TextView