import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show : false,
    value : {
        title: null,
        subtitle: null,
        price: null,
        name : '',
        mail : '',
        comment : ''
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
        },
        messageInp : (state, action) => { 
            return state = {...initialState, value : {...action.payload}}
        } 
    }
})

export const {modalVisible, modalNoVisible, messageInp} = inpAction.actions
export default inpAction.reducer