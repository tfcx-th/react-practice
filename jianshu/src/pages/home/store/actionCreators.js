import axios from 'axios'
import * as constant from './constant'

function changeHomeData(data) {
    const { articleList, topicList } = data.data
    return {
        type: constant.CHANGE_HOME_DATA,
        topicList,
        articleList
    }
}

export const getHomeInfo = () => {
    return async dispatch => {
        const { data } = await axios.get('./api/home.json')
        dispatch(changeHomeData(data))
    }
}

export const toggleTopShow = show => ({
    type: constant.TOGGLE_SCROLL_TOP,
    show
})