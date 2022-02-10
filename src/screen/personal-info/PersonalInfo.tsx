import React, {FC, useContext, useEffect, useState} from "react";
import {
	AppStyle,
	background,
	bold,
	borderWidth, circleImage,
	flexCenter,
	flexHori,
	flexVerti,
	height,
	margin,
	marginEnd, marginHori,
	marginStart, marginTop, marginVertical,
	padding,
	paddingBottom,
	paddingHori,
	radius,
	regular, semiBold,
	textColor,
	weightItem,
	width,
} from "../../AppStyle";
import ButtonView from "../../components/ButtonView";
import Column from "../../components/Column";
import {ImageView} from "../../components/ImageView";
import TextView from "../../components/Text";
import BackIcon from "@mui/icons-material/ArrowBackIosNew";
import {useNavigate} from "react-router-dom";
import {Colors} from "../../AppColor";
import bgHome from "../../asset/bg_home.png";
import {BaseMobileScreen} from "../basescreen/BaseAppScreen";
import User from "../../models/User";
import {AppCtx} from "../../App";
import Logger from "../../api/Logger";
import Pet from "../../models/Pet";
import AppApi, {NetworkErrorHandler} from "../../api/AppApi";
import {AxiosError} from "axios";
import {BaseResponse} from "../../api/ApiJsonFormat";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import {storage} from "../../components/firebase/FirebaseApp";
import {Avatar, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors";

interface PersonalInfoProps {
}

export default function PersonalInfo (props: PersonalInfoProps) {
	let appContext = useContext(AppCtx);
	let appApi = appContext.appApi;
	let setLoading = appContext.setLoading;

	let user = appContext.currentUser
	let setUser = appContext.setCurrentUser
	const [disabled, setDisabled] = useState(true);
	// let [user, setUser] = useState<User>()
	let [name, setName] = useState(user?.name)
	let [email, setEmail] = useState(user?.email)
	let [phone, setPhone] = useState(user?.phone)
	let [avatarFile, setAvatarFile] = useState<File>();



	let navigate = useNavigate();
	const editHandler = () => {

	};

	const updateUserDetail = async () =>{
		let controller = new AbortController()
		try {


			if(!user){return}

			let res = await appApi.updateUserDetail(user.id, name? name: '', email? email: '', phone? phone: '')
			if (res.data.statusCode===200){
				setUser(res.data.data)
				setDisabled(!disabled)
			}else{
				Logger.errorToast()
			}

		} catch (e) {
			AppApi.handleCallApiError(e, new class implements NetworkErrorHandler {
				onNetworkError(e: AxiosError<BaseResponse<any>>): void {
					Logger.errorToast(e.response?.data.message)
				}

				onOtherError(e: unknown): void {
					Logger.errorToast()
				}
			}())
		}finally {
			setLoading(false)
		}
	}



	// const uploadImages = async (_listImage: File[]) => {
	// 	let promises: Promise<string>[] = _listImage.map((image) => {
	// 		let refImg = ref(storage, `images/${image.name}`);
	// 		let uploadTask = uploadBytesResumable(refImg, image);
	// 		return new Promise<string>((resolve, reject) => {
	// 			uploadTask.on(
	// 				"state_changed",
	// 				undefined,
	// 				(error) => {
	// 					reject(error);
	// 				},
	// 				() => {
	// 					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
	// 						console.log(`File ${image.name} available at`, downloadURL);
	// 						resolve(downloadURL);
	// 					});
	// 				}
	// 			);
	// 		});
	// 	});
	//
	// 	setLoading(true)
	// 	try {
	// 		let urls = await Promise.all(promises)
	// 		setListImageJson(JSON.stringify(urls))
	// 	} catch (e) {
	// 		Logger.error(e)
	// 		Logger.errorToast()
	// 	} finally {
	// 		setLoading(false)
	// 	}
	// };

	// const handleSave = async () => {
	//
	// 	// upload to get urls of pet's images
	//
	// 	// call api
	// 	setLoading(true)
	// 	try {
	// 		setName(user.name)
	// 		setEmail(user.email)
	// 		setPhone(user.phone)
	// 		setDisabled(!disabled);
	// 		Logger.successToast()
	// 			navigate('../')
	//
	// 	} catch (e) {
	// 		AppApi.handleCallApiError(e, new class implements NetworkErrorHandler {
	// 			onNetworkError(e: AxiosError<BaseResponse<any>>): void {
	// 				Logger.errorToast(e.response?.data.message)
	// 			}
	//
	// 			onOtherError(e: unknown): void {
	// 				Logger.errorToast()
	// 			}
	// 		}())
	// 	} finally {
	// 		setLoading(false)
	// 	}
	// };

	useEffect(() => {
		if(!user) {
			navigate('../login');
		}



		}, [])

		const update = () => {
		let title
			if(disabled) {title = 'Sửa'} else title='Lưu'
				return <ButtonView
				style={AppStyle(weightItem(1), textColor(Colors.color_primary))}
				onClick={
					() => {
						setDisabled(!disabled)
						if(!disabled){updateUserDetail()}
					}
				}
			>{title}
			</ButtonView>
		}

		return (
			<BaseMobileScreen>
				<div>
					<header
						style={AppStyle(
							{backgroundImage: `url(${bgHome})`},
							paddingBottom(20)
						)}
					>
						<div style={AppStyle(flexHori(), padding(40))}>
							<ButtonView style={{padding: 0, marginRight: 20}}
										onClick={() => {
											navigate(-1);
										}}
							>
								<BackIcon/>
							</ButtonView>

							<TextView style={AppStyle(weightItem(7), semiBold(20))}>
								Cá nhân
							</TextView>

							{update()}
						</div>

						<div
							style={AppStyle(
								flexHori(),
								flexCenter(),
								marginTop(20),
								marginStart(40),
								marginEnd(40)
							)}
						>


							{user?.avatar=== null && <Avatar sx={{ bgcolor: deepPurple[500] }}>{user.name.slice(0, 2).toUpperCase()}</Avatar>}
							{user?.avatar !== null && <Avatar style={AppStyle(circleImage(42))} src={user?.avatar}/>}
							<Column style={AppStyle(flexVerti(), marginStart(15))}>
								<TextView style={AppStyle(bold(17))}>
									{`Xin chào "Sen" ${name} !!`}
								</TextView>

							</Column>
						</div>
					</header>
					<Column style={AppStyle(marginHori(40), marginVertical(20))}>

						<Typography>
							Tên đầy đủ
						</Typography>

						<input
							style={AppStyle(
								marginVertical(20),
								width("auto"),
								height(50),
								radius(15),
								paddingHori(15),

								borderWidth(0),
								background("#f4f4f8")
							)}
							type="text"
							disabled={disabled}
							value={name}
							onChange={e=>{setName(e.target.value)}}

						/>
						<input
							style={AppStyle(
								marginVertical(20),
								width("auto"),
								height(50),
								radius(15),
								paddingHori(15),
								borderWidth(0),
								background("#f4f4f8")
							)}
							type="email"
							disabled
							value={email}
							onChange={e=>setEmail(e.target.value)}
						/>
						<input
							style={AppStyle(
								marginVertical(20),
								width("auto"),
								height(50),
								radius(15),
								paddingHori(15),

								borderWidth(0),
								background("#f4f4f8")
							)}
							type="text"
							disabled={disabled}
							value={phone}
							onChange={e=>setPhone(e.target.value)}
						/>
					</Column>
				</div>
			</BaseMobileScreen>
		);


}

