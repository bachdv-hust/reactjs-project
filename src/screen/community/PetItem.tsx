import {Card} from "react-bootstrap";

import {
	AppStyle, background,
	circleImage,
	cursorPointer, fitContain,
	height,
	margin,
	marginBottom, marginStart,
	padding,
	radius,
	regular, semiBold, textColor,
	width,
} from "../../AppStyle";
import TextView from "../../components/Text";
import Column from "../../components/Column";
import {Avatar, Chip, ImageListItem, Paper, Typography} from "@mui/material";
import Pet from "../../models/Pet";
import React, {FC, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Logger from "../../api/Logger";
import {AppCtx} from "../../App";
import User from "../../models/User";
import Rows from "../../components/Row";
import {ImageView} from "../../components/ImageView";
import maleLogo from "../../asset/ic_male.svg";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PetsIcon from '@mui/icons-material/Pets';
import femaleLogo from "../../asset/ic_female.svg";

interface PetItemProp {
	pet: Pet
}


const PetItem: FC<PetItemProp> = (props) => {
	let navigate = useNavigate()
	let pet = props.pet
	const appApi = useContext(AppCtx).appApi
	let [user, setUser] = useState<User>()

	let listImages: string[]
	try {
		listImages = JSON.parse(pet.images)
	} catch (e) {
		Logger.error(e)
		listImages = []
	}

	let genderImg;
	if (pet.gender === "Đực") {
		genderImg = maleLogo
	} else {
		genderImg = femaleLogo
	}

	useEffect(() => {
		let controller = new AbortController()
		const fetchUserData = async (userId: number) => {
			try {
				let res = await appApi.getUserById(userId, controller)
				let resData = res.data
				if (resData.statusCode === 200) {
					setUser(resData.data)
				} else {

				}
			} catch (e) {
				Logger.error(e)
			}
		}

		fetchUserData(pet.userId).then(
			() => {

			}
		)

		return () => {
			controller.abort()
		}
	}, [pet.userId, appApi])

	let avatar: string
	if (!listImages) {
		avatar = ''
	} else {
		avatar = listImages[0]
	}

	const navigateToPetDetail = () => {
		navigate(`/pet-detail/${pet.id}`)
	}

	return (
		<Paper style={AppStyle(
			radius(0),
			margin(0),
			cursorPointer()
		)} elevation={1} onClick={navigateToPetDetail}>
			<ImageListItem key={pet.id} style={{
				width: '100%',
				height: 'auto'
			}}>
				<div style={AppStyle(marginBottom(0), width('100%'))}>
					<Card.Img style={AppStyle({position: 'relative'}, width('100%'))} src={avatar}/>

					<Avatar style={AppStyle(width(40), height(40),
						{position: 'absolute', top: 10, left: 10, borderWidth: 2, borderColor: 'white'})}
					        src={user?.avatar}>

					</Avatar>
					<Column style={
						AppStyle(
							margin(6),
							radius(8),
							padding(20),
							width('calc(100% - 12px)'),
							background('rgba(0,0,0,0.56)'),
							{position: 'absolute', bottom: 0}
						)
					}>
						<Rows>
							<Typography style={AppStyle(semiBold(16), textColor('white'))}>{pet.name}</Typography>
							<ImageView style={AppStyle(marginStart(5), width('auto'),
								height(16), fitContain())} src={genderImg}/>
						</Rows>

						<Rows style={{
							marginTop: 10
						}}>
							<CustomChip label={pet.type} icon={<PetsIcon  style={{fill: "green"}}/>}/>
							<CustomChip label={pet.address} icon={<GpsFixedIcon  style={{fill: "white"}}/>}/>
						</Rows>

					</Column>
				</div>
			</ImageListItem>
		</Paper>
	)
}

interface CustomChipProps {
	label: string|undefined|null
	icon?: React.ReactNode
}

const CustomChip : FC<CustomChipProps> = (props) => {
	const {icon} = props
	if(!props.label) {
		return null
	} else {
		return <Rows
			style={{
				padding: 8,
				borderRadius: 12,
				background: 'rgba(0,0,0,0.51)',
				marginRight: 8
			}}
		>
			{
				icon? icon : null
			}

			<Typography style={{
				color: 'white',
				marginLeft: 8
			}}>
				{props.label}
			</Typography>

		</Rows>
	}
}

export default PetItem
