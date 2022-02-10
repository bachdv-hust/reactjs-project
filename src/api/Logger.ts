import {toast} from "react-hot-toast";

/**
 * Logger only on local (url == localhost)
 * */
export default class Logger {
	private static readonly toastOpts = {
		duration: 1000
	}

	public static shouldShowLog() {
		return window.location.hostname === "localhost";
	}

	public static log = (...data: any[]) => {
		if (Logger.shouldShowLog()) {
			console.log(data)
		}
	}

	public static error = (e: unknown) => {
		if (Logger.shouldShowLog()) {
			console.error(e)
		}
	}

	public static successToastLog = (msg?: string) => {
		if (Logger.shouldShowLog()) {
			this.successToast(msg)
		}
	}

	public static errorToastLog = (msg?: string) => {
		if (Logger.shouldShowLog()) {
			this.errorToast(msg)
		}
	}

	public static normalToastLog = (msg?: string) => {
		if (Logger.shouldShowLog()) {
			this.normalToast(msg)
		}
	}

	public static successToast = (msg?: string) => {
		if (msg) {
			toast.success(msg, this.toastOpts)
		} else {
			toast.success('Thành công', this.toastOpts)
		}

	}

	public static errorToast = (msg?: string) => {
		try {
			if (msg) {
				toast.error(msg, this.toastOpts)
			} else {
				toast.error('Đã có lỗi xảy ra, vui lòng thử lại', this.toastOpts)
			}
		} catch (e) {
			this.error(e)
		}
	}

	public static normalToast = (msg?: string) => {
		if (msg) {
			toast(msg, this.toastOpts)
		}
	}
}
