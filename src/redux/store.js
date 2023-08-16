import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./slice/inputSlice";
import countSymbol from "./slice/countSlice";
import countForm from "./slice/formSlice";

export const store = configureStore({
    reducer : {
        inpSlice : inputSlice,
        countSlice : countSymbol,
        formSlice : countForm,
    },
})