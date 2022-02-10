import React, {FC, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AppCtx} from "../../App";
import DirectChatPage from "./DirectChatPage";
import {NetworkErrorHandler} from "../../api/AppApi";
import Logger from "../../api/Logger";
import ApiHelper from "../../api/ApiHelper";
import LoadingScreen from "../util/LoadingScreen";

const PetMessengerScreen: FC = () => {
	const appContext = React.useContext(AppCtx)
	const chatAppApi = appContext.chatApi
	const currentUser = appContext.currentUser
	const navigate = useNavigate()
	const [isReadyChat, setReadyChat] = useState(false)

	useEffect(() => {
		// register messenger service
		const getOrCreateChatUser = async () => {
			if (!currentUser) {
				navigate('../login')
				return
			}
			try {
				let chatRes = await chatAppApi.getOrCreateChatUser(currentUser)
				if (chatRes.status === 200) {
					setReadyChat(true)
				} else {
					navigate(-1)
				}
			} catch (e) {
				ApiHelper.handleCallApiError(e, new class implements NetworkErrorHandler {
					onNetworkError(): void {
						Logger.errorToast()
						navigate(-1)
					}

					onOtherError(): void {
						navigate(-1)
					}
				}())
			}
		}

		getOrCreateChatUser().then(() => {
			Logger.log('get|register chat user done')
		})
	}, [])

	if(!currentUser){
		return <LoadingScreen isLoading={true}/>
	}

	return <DirectChatPage
		userName={currentUser.email}
		userSecret={currentUser.email}
	/>
}
export default PetMessengerScreen
