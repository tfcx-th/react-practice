import axios from 'axios'
import * as constant from './constant'

export const getDetailData = () => {
    return async dispatch => {
        const { data } = await axios.get('./api/detail.json')
        const { title, content } = data.data
        dispatch({
            type: constant.CHANGE_DETAIL_DATA,
            title,
            content
        })
    }
}