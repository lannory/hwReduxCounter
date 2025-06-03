import { createSlice } from "@reduxjs/toolkit";


const initialState = 0;

const counterSlice = createSlice({
	initialState,
	name: "counter",
	reducers: {
		increase: (state, action) => {
			state++;
			return state;
		},
		decrease: (state, action) => {
			state--;
			return state;
		}
	}
})

export const {increase, decrease} = counterSlice.actions;

export default counterSlice.reducer;