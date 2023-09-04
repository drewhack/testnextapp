import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import themeReducer from '../../features/themes/themeSlice'
import counterReducer from '../../features/counter/counterSlice'



const reducers = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});



export const store = configureStore({
  reducer: reducers,
})




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

