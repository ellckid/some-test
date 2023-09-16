import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { reducer as postReducers } from './posts/posts.slice'

const logger = createLogger({
    collapsed: true
})

const rootReducers = combineReducers({
    posts: postReducers
})



export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
})

// Infer the `RootState`  types from the store itself
// Чтобы получать тип самого стор
export type RootState = ReturnType<typeof rootReducers>
