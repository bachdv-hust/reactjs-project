import { FC } from "react";
import { AppStyle, flexHori } from "../AppStyle";

const Rows:FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
    return <div {...props} style={AppStyle(flexHori(), props.style)}>
        {props.children}
    </div>
}

export default Rows