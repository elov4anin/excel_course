import {TABLE_RESIZE} from '@/redux/types'

export function rootReducer(state, action) {
    const prevState = state.colState || {}
    switch (action.type) {
        case TABLE_RESIZE:
            prevState[action.data.id] = action.data.value
            return {
                ...state,
                colState: prevState
            }

        default: return state
    }
}
