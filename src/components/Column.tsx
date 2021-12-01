import { FC } from "react";
import { AppStyle, flexHori, flexVerti } from "../AppStyle";
import { ElementProps } from "./Props";


const Column:FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
    return <div {...props} style={AppStyle(flexVerti(), props.style)}>
        {props.children}
    </div>
}

export default Column