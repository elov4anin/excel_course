import {storage} from '@core/utils'
import {DEFAULT_STYLES, DEFAULT_TITLE_TABLE} from '@/constant'

const defaultState = {
    title: DEFAULT_TITLE_TABLE,
    rowState: {},
    colState: {},
    dataState: {}, // {'0:1': ''}
    stylesState: {},
    currentText: '',
    currentStyles: DEFAULT_STYLES
}

const normalize = state => ({
        ...state,
        currentStyles: DEFAULT_STYLES,
        currentText: ''
    }
)


export const initialState = normalize(storage('excel-state')) ? storage('excel-state') : defaultState
