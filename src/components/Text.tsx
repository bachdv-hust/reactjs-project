import { AppStyle, flexHori, flexVerti, margin } from "../AppStyle";
import { ParentProps } from "./Props";

export default function TextView(props: ParentProps) {
    return <p style={AppStyle(margin(0), props.style)}>{props.children}</p>
}