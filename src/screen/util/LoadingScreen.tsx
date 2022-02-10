import {FC} from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './loading.css'
import {CircularProgress, Typography} from "@mui/material";
import Column from "../../components/Column";
import Rows from "../../components/Row";
import {ImageView} from "../../components/ImageView";
import icPetIcon from "../../asset/petty_icon.png"

interface LoadingScreenProps {
	isLoading: boolean,
}

const LoadingScreen: FC<LoadingScreenProps> = (props) => {
	let {isLoading} = props

	return(
		<div>
			<Popup className="loading" closeOnEscape={false} closeOnDocumentClick={false} modal open={isLoading}>
				<Column style={{
					zIndex: 1000,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<CircularProgress color="info"/>
					<Rows style={{
						marginTop: 16,
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<ImageView src={icPetIcon} style={{
							height : 30,
							width: 30,
							marginRight: 20
						}}/>
						<Typography style={{
							color: 'white'
						}}>
							Đang xử lý ...
						</Typography>
					</Rows>
				</Column>
			</Popup>
		</div>
		)
}

export default LoadingScreen
