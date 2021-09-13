import {DEFAULT_STYLES, DEFAULT_TITLE_TABLE} from '@/constant'
import {clone} from '@core/utils'

const defaultState = {
    title: DEFAULT_TITLE_TABLE,
    rowState: {},
    colState: {},
    dataState: {}, // {'0:1': ''}
    stylesState: {},
    currentText: '',
    currentStyles: DEFAULT_STYLES,
    openedDate: new Date().toJSON()
}

const normalize = state => ({
        ...state,
        currentStyles: DEFAULT_STYLES,
        currentText: ''
    }
)

export function normalizeInitialState(state) {
    return state ? normalize(state) : clone(defaultState)
}
