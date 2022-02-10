import {FC, useEffect, useState} from "react";
import {StandardTextFieldProps} from "@mui/material/TextField/TextField";
import {TextField} from "@mui/material";


interface ValidateTextInputProps extends StandardTextFieldProps {
	/**
	 * @name check_valid_functions
	 * @param listValidator need an array of checking valid input (because may be more than one validate are required)
	 */
	check_valid_functions: ((input: string) => [boolean, string?])[]
	set_value: (value: string) => void
	set_valid?: (isValid: boolean) => void
}

const ValidateTextInput: FC<ValidateTextInputProps> = (props) => {
	let {check_valid_functions} = props
	let [text, setText] = useState('')
	let [isValid, setIsValid] = useState(true)

	/**
	 * Return true if all checker function is true
	 * */
	let checkIsValid = (): boolean => {
		return !check_valid_functions.map(fn => {
			return fn(text)[0]
		}).includes(false)
	}

	/**
	 * Return an error text base on checker function (ordered)
	 * */
	let handleErrorText = (): string => {
		for (const checkValidFunction of check_valid_functions) {
			let res = checkValidFunction(text)
			if (!res[0]) {
				return res[1] ? res[1] : ''
			}
		}
		return ''
	}

	useEffect(() => {
		let isValid = checkIsValid()
		setIsValid(isValid)

		if(props.set_valid) {
			props.set_valid(isValid)
		}
	}, [text])

	return <TextField
		{...props}
		style={props.style}
		value={text}
		onChange={
			(e) => {
				let value = e.target.value
				setText(value)
				props.set_value(value)
			}
		}

		onFocus={
			(e) => {
				setIsValid(checkIsValid())
			}
		}
		onBlur={(e) => {
			setIsValid(true)
		}
		}
		helperText={handleErrorText()}
		error={!isValid && text.length > 0}
	/>
}

export default ValidateTextInput



