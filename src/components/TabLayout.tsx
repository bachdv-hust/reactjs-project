import {FC} from "react";
import {Props} from "./Props";
import {AppStyle, height} from "../AppStyle";


interface TabPanelProps extends Props<HTMLDivElement> {
	index: number;
	value: number;
}

const visibilityStyle = (hiddenCondition: boolean): any => {
	if (hiddenCondition) {
		return {
			visibility: 'hidden',
			height: 0,
		};
	}
	return {
		visibility: 'visible',
		height: 'inherit',
	};
};

const ScrollableDiv: FC<Props<HTMLDivElement>> = (props) => {
	return <div style={
		AppStyle(
			height('92vh'),
			{
				overflowY: 'scroll'
			}, props.style
		)
	}> {props.children} </div>
}

const TabPanel: FC<TabPanelProps> = (props) => {
	const {children, value, index} = props;
	return (
		<ScrollableDiv
			style={visibilityStyle(value !== index)}
		>
			{children}
		</ScrollableDiv>
	)
}

export default TabPanel