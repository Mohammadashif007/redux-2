import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import bonusReducer from "./features/bonus/bonusSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        bonus: bonusReducer
    }
})