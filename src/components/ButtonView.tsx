import { FC } from "react";
import { AppStyle, background, borderWidth } from "../AppStyle";
import { Props } from "./Props";
import TextView from "./Text";


const ButtonView: FC<Props<HTMLButtonElement>> = (props) => {
    let propStyle = props.style
    return <button {...props} style={AppStyle(props.style, background('none'), borderWidth(0))} >
        {props.children}
    </button>
}

export default ButtonView