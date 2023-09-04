import { createSlice } from '@reduxjs/toolkit'
import { store, type RootState } from '../../app/app/store'
import { saveState } from '@/app/app/localStorage'



// Define a type for the slice state

// Define the initial state using that type
export interface ThemeState {
  value: string;
}

// Define the initial state
export const initialState: ThemeState = {
  value: "dark",
};


export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: "dark",
  },
  reducers: {
    setTheme: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = action.payload
      saveState(store.getState());
    },
    
  },
  
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer