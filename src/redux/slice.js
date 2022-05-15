import { createSlice } from "@/reduxjs/toolkit";
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

const {standardUnit} = reach;

export const gameSlice = createSlice({
	name : gameState,
	initialState : {
		account : {},
		contract : "",
		wager : 0,
		_number: 0,
		outcome : "",
		defaults : { defaultFundAmt: '10', defaultWager: '10', standardUnit }
	},
	reducers : {
		updateAccount : (state, action) => {
			state.account = action.payload;
		},
		updateContract : (state, action) => {
			state.contract = action.payload;
		},
		updateWager : (state, action) => {
			state.wager = action.payload;
		},
		updateNumber : (state, action) => {
			state._number = action.payload;
		},
		updateOutcome : (state, action) => {
			state.outcome = action.payload;
		}
	}
});

export const { updateAccount, updateContract, updateWager, updateNumber, updateOutcome } = gameSlice.actions;

export default gameSlice.reducer;