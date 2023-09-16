import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions } from '../store/posts/posts.slice'
import * as asyncActions from '../store/posts/posts.actions'

const rootActions = {
    ...asyncActions,
    ...actions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [])
}
