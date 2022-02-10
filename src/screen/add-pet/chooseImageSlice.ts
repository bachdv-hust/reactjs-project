import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ImageState {
	value: File[]
}

const initialState: ImageState = {
	value: [],
}

export const chooseImageSlice = createSlice({
	name: "chooseImageSlice",
	initialState,
	reducers: {
		addImage: (state, action: PayloadAction<File>) => {
			state.value.push(action.payload)
		},
		removeImage: (state, action: PayloadAction<File>) => {

		},
		removeAll: (state) => {
			state.value = []
		}
	}
})

let chooseImageReducer = chooseImageSlice.reducer

export const {addImage, removeImage, removeAll} = chooseImageSlice.actions

export default chooseImageReducer