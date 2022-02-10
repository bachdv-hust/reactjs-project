import axios, {AxiosError, AxiosRequestConfig, AxiosResponse, AxiosStatic} from "axios";
import * as AxiosLogger from 'axios-logger';
import Constants from "./Constants";
import {
	AllPetsResponse,
	BaseResponse,
	LoginResponse,
	PetDetailResponse,
	RegisterResponse, TokenUserResponse,
	UserResponse
} from "./ApiJsonFormat";
import Pet from "../models/Pet";
import Logger from "./Logger";
import ApiHelper from "./ApiHelper";
import User from "../models/User";

export default class AppApi {
	private readonly appAxios: AxiosStatic
	private access_token: string = '';
	private appAxiosConfig: AxiosRequestConfig = {};
	public static DEFAULT_LEN_ITEMS = 5;

	constructor() {
		this.appAxios = axios
		this.appAxios.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger)
		this.appAxios.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger)
		this.setToken('')
	}

	getAxios = () => {
		return this.appAxios
	}

	setToken(token: string) {
		this.access_token = token
		this.appAxiosConfig = {
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		}

		console.log('set token:',{token})
	}

	/**
	 *  auto refresh token wrapper function
	 * */
	ensureAuthorize = async <T>(username: string, pwd: string, axiosFunction: () => Promise<AxiosResponse<BaseResponse<T>>>, abortController?: AbortController): Promise<AxiosResponse<BaseResponse<T>>> => {
		try {
			return await axiosFunction()
		} catch (e) {
			if ((e as AxiosError).isAxiosError) {
				let axiosError = e as AxiosError
				if (axiosError.response?.status === 401) {
					// need refresh token
					try {
						let refreshTokenRes = await this.refreshToken(username, pwd, abortController)
						this.setToken(refreshTokenRes.data.data.token)
						return await axiosFunction()
					} catch (e) {
						Logger.error(e)
						return axiosError.response
					}
				} else {
					throw e
				}
			} else {
				throw e
			}
		}
	}

	login = (username: string, pwd: string, abortController?: AbortController) => {
		let bodyData = {
			'email': username,
			'password': pwd
		}
		const configs = ApiHelper.configWithAbortController(abortController, this.appAxiosConfig)
		return this.appAxios.post<LoginResponse>(Constants.BASE_URL_V1 + Constants.endPoint.LOGIN, bodyData, configs)
	}

	refreshToken = (username: string, pwd: string, abortController?: AbortController) => {
		console.log('call refresh')
		let bodyData = {
			'email': username,
			'password': pwd
		}
		const configs = ApiHelper.configWithAbortController(abortController, this.appAxiosConfig)
		return this.appAxios.post<BaseResponse<{ token: string }>>(Constants.BASE_URL_V1 + Constants.endPoint.LOGIN, bodyData, configs)
	}

	register = (name: string, username: string, pwd: string, avatar: string | undefined, phone: string | undefined
		, abortController?: AbortController) => {
		let bodyData = {
			'email': username,
			'password': pwd,
			'repeatPassword': pwd,
			'phone': phone ? phone : '',
			'name': name,
			'avatar': avatar ? avatar : '',
		}
		const configs = ApiHelper.configWithAbortController(abortController, this.appAxiosConfig)
		return this.appAxios.post<RegisterResponse>(Constants.BASE_URL_V1 + Constants.endPoint.REGISTER, bodyData, configs)
	}

	getAllUsers = (abortController?: AbortController) => {
		const configs = ApiHelper.configWithAbortController(abortController, this.appAxiosConfig)
		return this.appAxios.get<BaseResponse<User[]>>(Constants.BASE_URL_V1 + Constants.endPoint.USERS, configs)
	}


	getAllPets = (
		page: number,
		size: number = AppApi.DEFAULT_LEN_ITEMS,
		abortController?: AbortController) => {
		const configs = ApiHelper.configWithAbortController(abortController, {
			params: {
				'page': page,
				'size': size,
			}
		})
		return this.appAxios.get<AllPetsResponse>(Constants.BASE_URL_V1 + Constants.endPoint.PETS, configs)
	}

	getPetById = (id: string, abortController?: AbortController) => {
		const configs = ApiHelper.configWithAbortController(abortController)
		return this.appAxios.get<PetDetailResponse>(Constants.BASE_URL_V1 + Constants.endPoint.PETS + `/${id}`, configs)
	}

	getUserById = (id: number, abortController?: AbortController) => {
		const configs = ApiHelper.configWithAbortController(abortController, this.appAxiosConfig)
		return this.appAxios.get<UserResponse>(Constants.BASE_URL_V1 + Constants.endPoint.USERS + `/${id}`, configs)
	}

	addPet = (pet: Pet, abortController?: AbortController) => {
		let bodyData = {
			"name": pet.name,
			"dob": pet.dob,
			"gender": pet.gender,
			"type": pet.type,
			"class": pet.class,
			"resource": pet.resource,
			"status": pet.status,
			"address": pet.address,
			"images": pet.images
		}
		const configs = ApiHelper.configWithAbortController(abortController, this.appAxiosConfig)
		return this.appAxios.post<PetDetailResponse>(
			Constants.BASE_URL_V1 + Constants.endPoint.PETS,
			bodyData,
			configs
		)
	}

	getMyPets = (abortController?: AbortController) => {
		const configs = ApiHelper.configWithAbortController(abortController, this.appAxiosConfig)
		return this.appAxios.get<AllPetsResponse>(
			Constants.BASE_URL_V1 + Constants.endPoint.MY_PETS + `?page=0&size=10`,
			configs
		)
	}

	public static handleCallApiError(e: unknown, handler: NetworkErrorHandler) {
		if ((e as AxiosError).isAxiosError) {
			handler.onNetworkError(e as AxiosError<BaseResponse<any>>)
		} else {
			handler.onOtherError(e)
		}
	}
	getUserDetail = (abortController?: AbortController) => {
		const configs = ApiHelper.configWithAbortController(abortController, this.appAxiosConfig)
		return this.appAxios.get<UserResponse>(Constants.BASE_URL_V1 + Constants.endPoint.USER_DETAIL , configs);
	}

	updateUserDetail = (id: string, name: string, username: string, phone: string | undefined, abortController?: AbortController)=>{
		let bodyData = {
			'id': id,
			'name': name,
			'email': username,
			'phone': phone ? phone : '',

			// 'avatar': avatar ? avatar : '',
		}

	const configs = ApiHelper.configWithAbortController(abortController, this.appAxiosConfig)
		return this.appAxios.put<UserResponse>(Constants.BASE_URL_V1 + Constants.endPoint.USERS, bodyData, configs)

}



}

export interface NetworkErrorHandler {
	onNetworkError: (e: AxiosError<BaseResponse<any>>) => void
	onOtherError: (e: unknown) => void
}
