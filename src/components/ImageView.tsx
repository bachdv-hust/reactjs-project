import { FC } from "react";
import { AppStyle, background, border, borderWidth, circle, fitImage, margin } from "../AppStyle";
import { ElementProps } from "./Props";

const ImageView: FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = (props) => {
    return <img {...props} style={AppStyle(props.style ? props.style : {}, fitImage())}/>
}

const ButtonImageView: FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = (props) => {
    return <button style={AppStyle(background('none'), borderWidth(0))}>
        <img {...props} style={AppStyle(props.style ? props.style : {}, fitImage())}/>
    </button>
}

export{
    ImageView,
    ButtonImageView
} 