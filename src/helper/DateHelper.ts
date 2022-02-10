class DateHelper {
	private constructor() {
	}

	public static dateToStringJson(date: Date): string {
		return date.toJSON()
	}

	public static stringJsonToDate(dateJson: string): Date | undefined {
		try {
			return new Date(dateJson)
		} catch (e) {
			console.log(e)
			return undefined
		}
	}

	public static dateToFormatString(date: Date): string {
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
	}

	public static formatStringToDate(formatString: string): Date | undefined {
		let values = formatString.split('-')
		try {
			return new Date(
				parseInt(values[0]),
				parseInt(values[0]),
				parseInt(values[0]),
			)
		} catch (e) {
			console.log(e)
			return undefined
		}
	}

	public static getDob = (strDateJson: string | undefined): string => {
		if (!strDateJson) return ''

		try {
			let date = DateHelper.stringJsonToDate(strDateJson)
			if (!date) return ''
			return DateHelper.dateToFormatString(date)
		} catch (e) {
			return ''
		}
	}
}

export default DateHelper
