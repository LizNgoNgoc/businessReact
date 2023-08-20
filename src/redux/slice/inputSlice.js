import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : {
        modal: {
            show : false,
            title: '',
            subtitle: '',
            price: '',
        },
        inputs : {
            name : '',
            mail : '',
            comment : ''
        }
    }
};

const inpAction = createSlice({
    name : 'inp',
    initialState,
    reducers : {
        modalVisible : (state, action) => {
            const {inputs} = initialState.value
            return  state = {...initialState, value : {
                inputs,
                modal : {...action.payload, show : true}
            }}
        },
        modalNoVisible : (state) => {
          return state = {...initialState, show : false}
        },
        messageInp : (state, action) => { 
            const {modal, inputs} = initialState.value
            return state = {...initialState, value : {
                modal, 
                inputs : {...inputs, ...action.payload}
            }}
        } 
    }
})

export const {modalVisible, modalNoVisible, messageInp} = inpAction.actions
export default inpAction.reducer