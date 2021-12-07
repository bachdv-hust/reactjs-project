import { FC } from "react";
import { AppStyle, background, borderWidth, fitImage } from "../AppStyle";

const ImageView: FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = (props) => {
    return <img {...props} alt="" style={AppStyle(props.style ? props.style : {}, fitImage())}/>
}

const ButtonImageView: FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = (props) => {
    return <button style={AppStyle(background('none'), borderWidth(0))}>
        <img {...props} alt="" style={AppStyle(props.style ? props.style : {}, fitImage())}/>
    </button>
}

export{
    ImageView,
    ButtonImageView
} 