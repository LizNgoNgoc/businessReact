import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./slice/inputSlice";

export const store = configureStore({
    reducer : {
        inpSlice : inputSlice
    },
})