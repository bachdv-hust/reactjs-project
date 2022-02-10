import {FC} from "react";
import {Colors} from "../../AppColor";
import {AppStyle, borderWidth} from "../../AppStyle";
import {Props} from "../../components/Props";
import Rows from "../../components/Row";
import BaseScreen from "./BaseScreen";
import {ImageView} from "../../components/ImageView";

export const BaseMobileScreen: FC<Props<HTMLDivElement>> = (props) => {
	return <Rows>
		<ImageAds
			linkTo={'https://www.petmart.vn/danh-muc/cho/thuc-an-cho'}
			urlImage={'https://preview.redd.it/3diggq4pi0x11.jpg?auto=webp&s=261c7127bef6bde57a23ab7a0b6f1d9ac74b8866'}/>

		<BaseScreen
			{...props}

			style={
				AppStyle(
					{...props.style},
					borderWidth(1),
					{width: '50%', minHeight: "100vh", background: Colors.color_white}
				)
			}

		>
			{
				props.children
			}
		</BaseScreen>

		<ImageAds
			linkTo={'https://www.facebook.com/hanoipetrescue.cpapsvn.org/'}
			urlImage={'https://www.cesarsway.com/wp-content/uploads/2015/06/AdobeStock_111135014-1024x683.jpeg'}/>
	</Rows>
}

interface ImageAdsProps {
	urlImage: string,
	linkTo?: string
}

const ImageAds: FC<ImageAdsProps> = ({urlImage, linkTo}) => {
	return <a
		style={{
			height: '100vh',
			width: '25%'
		}}
		target="_blank"
		href={linkTo || ''}>
		<ImageView
			style={{
				height: '100vh',
			}}
			src={urlImage}
		/></a>
}

export const BaseFullScreen: FC<Props<HTMLDivElement>> = (props) => {
	return <BaseScreen
		{...props}

		style={
			AppStyle(
				{...props.style}
			)
		}

	>
		{
			props.children
		}
	</BaseScreen>
}
