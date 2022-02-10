import ApiHelper from "./ApiHelper";
import Constants from "./Constants";
import User from "../models/User";
import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import * as AxiosLogger from "axios-logger";

export default class ChatClientApi {
	protected readonly appAxios: AxiosInstance
	private readonly messengerAppAxiosConfig: AxiosRequestConfig

	constructor() {
		this.appAxios = axios.create({
			baseURL: "https://api.chatengine.io/"
		})
		this.appAxios.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger)
		this.appAxios.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger)
		this.messengerAppAxiosConfig = {
			headers: {
				'PRIVATE-KEY': Constants.MESSENGER_PROJECT_PRIVATE_KEY
			}
		}
	}

	getOrCreateChatUser = (user: User, abortController?: AbortController) => {
		let bodyData = {
			"username": user.email,
			"first_name": user.name,
			"last_name": "",
			"secret": user.email
		}
		const configs = ApiHelper.configWithAbortController(abortController, this.messengerAppAxiosConfig)
		return this.appAxios.put<any>(
			Constants.chatEndPoint.USERS, bodyData, configs
		)
	}

	createDirectChat = (me: User, toUser: User, abortController?: AbortController) => {
		const config = {
			headers: {
				'user-name': me.email,
				'user-secret': me.email,
				'public-key': Constants.MESSENGER_PROJECT_ID
			}
		}

		let bodyData = {
			'usernames': JSON.stringify([toUser.email]),
			'is_direct_chat': true
		}

		const configs = ApiHelper.configWithAbortController(abortController, config)

		return this.appAxios.put<any>(
			Constants.chatEndPoint.USERS, bodyData, configs
		)
	}
}
