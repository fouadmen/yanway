import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    from_obj : {description: "", place_id:""},
    to: {description: "", place_id:""},
    date: "Today",
    passangers : ""
}

const searchReducers = {
    setSearchValue(state, action){
        state[action.payload.field] = action.payload.value;
    },

} 

const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers : searchReducers
})

export const { setSearchValue } = searchSlice.actions 
export default searchSlice;