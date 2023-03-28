import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     value: 0,
}

export const likeReducer = createSlice({
     name: 'like',
     initialState,
     reducers: {
          handleLike: (state,action)=>{
               state.value += action.payload
          }
     },
})

// Action creators are generated for each case reducer function
export const { handleLike } = likeReducer.actions

export default likeReducer.reducer