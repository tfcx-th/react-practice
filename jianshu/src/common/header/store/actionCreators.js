import * as constant from './constant'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeList = data => ({
    type: constant.CHANGE_LIST,
    data: fromJS(data)
})

export const searchFocus = () => ({
    type: constant.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constant.SEARCH_BLUR
})

export const getList = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('/api/headerList.json')
            dispatch(changeList(data.data))
        } catch (err) {
            console.error(err)
        }
        
    }
}