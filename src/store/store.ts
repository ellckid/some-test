import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { reducer as postReducers } from './posts/posts.slice'

const logger = createLogger({
    collapsed: true
})

const reducers = combineReducers({
    posts: postReducers
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// Чтобы получать тип самого стор
export type RootState = ReturnType<typeof store.getState>
