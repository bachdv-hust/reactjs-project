import {AxiosError} from "axios";

class ApiHelper {
	public static handleCallApiError(e: unknown, handler: NetworkErrorHandler) {
		if ((e as AxiosError).isAxiosError) {
			handler.onNetworkError(e as AxiosError)
		} else {
			handler.onOtherError(e)
		}
	}

	public static configWithAbortController = (abortController?: AbortController, configs?: any): any => {
		if (!abortController) {
			return configs
		}

		if (!configs) {
			return {
				signal: abortController.signal
			}
		}

		return {
			...configs,
			signal: abortController.signal
		}
	}
}

export interface NetworkErrorHandler {
	onNetworkError: (e: AxiosError) => void
	onOtherError: (e: unknown) => void
}

export default ApiHelper
