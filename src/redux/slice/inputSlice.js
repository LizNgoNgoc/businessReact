import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show : false,
    value : {
        title: null,
        subtitle: null,
        price: null
    }
};

const inpAction = createSlice({
    name : 'inp',
    initialState,
    reducers : {
        modalVisible : (state, action) => {
            return  state = {...initialState, show : true, value : {...action.payload }}
        },
        modalNoVisible : (state) => {
          return state = {...initialState}
        }
    }
})

export const {modalVisible, modalNoVisible} = inpAction.actions
export default inpAction.reducer