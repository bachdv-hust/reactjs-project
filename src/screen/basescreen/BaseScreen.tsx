import {FC} from "react";
import {AppStyle} from "../../AppStyle";
import {Props} from "../../components/Props";

const BaseScreen: FC<Props<HTMLDivElement>> = (props) => {
	return <div
		{...props}

		style={
			AppStyle(
				{...props.style},
			)
		}

	>
		{
			props.children
		}
	</div>
}

export default BaseScreen;