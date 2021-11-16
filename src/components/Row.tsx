import { AppStyle, flexHori } from "../AppStyle";
import { ParentProps } from "./Props";

export default function Row(props: ParentProps) {
    return <div style={AppStyle(flexHori(), props.style)}>
        {props.children}
    </div>
}