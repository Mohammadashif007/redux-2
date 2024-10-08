import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const bonusSlice = createSlice({
    name: "bonus",
    initialState,
    reducers: {
        addBonus: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { addBonus } = bonusSlice.actions;
export default bonusSlice.reducer;
