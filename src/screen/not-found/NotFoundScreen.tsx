import { FC } from "react";
import Column from "../../components/Column";
import { ImageView } from "../../components/ImageView";

import img404 from '../../asset/404.png'
import { AppStyle, background, flexCenterInParent, height, marginTop, semiBold, textColor, width } from "../../AppStyle";
import TextView from "../../components/Text";
import { Colors } from "../../AppColor";

const NotFoundScreen: FC = () => {
    return <Column style={
        AppStyle(
            background('gray'),
            flexCenterInParent(),
            height('100vh')
        )
    }>
        <ImageView style={
            AppStyle(
                width(200),
                height('auto')
            )
        } src={img404} />

        <TextView style={
            AppStyle(
                textColor(Colors.color_white),
                semiBold(20),
                marginTop(40)
            )
        }>
            Oops, I got 404 problems singing bye, bye, bye !!!
        </TextView>
    </Column>
}

export default NotFoundScreen;