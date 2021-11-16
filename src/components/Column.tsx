import { AppStyle, flexHori, flexVerti } from "../AppStyle";
import { ParentProps } from "./Props";


export default function Column(props: ParentProps) {
    return <div style={AppStyle(flexVerti(), props.style)}>
        {props.children}
    </div>
}