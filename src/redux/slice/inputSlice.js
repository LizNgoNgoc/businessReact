import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : {
        modal: {
            show : false,
            title: '',
            subtitle: '',
            price: '',
        },
        form : {
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
            const {form} = initialState.value
            return  state = {...initialState, value : {
                modal : {...action.payload,  show : true},
                form : {...form}
            }}
        },
        modalNoVisible : (state) => {
            const {form} = initialState.value
          return state = {...initialState, form, show : false}
        },
        setForm : (state, action) => {
            const {modal} = initialState.value
            return state = {...initialState, value : {form : {
                ...action.payload
            }, modal
        }}
        },
        clearForm : (state) => {
            return state = {...initialState}
        }
    }
})

export const {modalVisible, modalNoVisible, setForm, clearForm} = inpAction.actions
export default inpAction.reducer