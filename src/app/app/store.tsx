import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import counterReducer from '../../features/counter/counterSlice'
import themeReducer, { initialState as themeInitialState } from '../../features/themes/themeSlice'
import { loadState } from "./localStorage";



const preloadedState = {

  theme: loadState()?.theme || themeInitialState, // Use themeInitialState directly
};


const reducers = combineReducers({

  theme: themeReducer,
});



export const store = configureStore({
  reducer: reducers,
  preloadedState: preloadedState,  
})




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

