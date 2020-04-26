import { fromJS } from 'immutable'
import * as constant from './constant'

const defaultState = fromJS({
    title: '',
    content: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.CHANGE_DETAIL_DATA:
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
            })
        default:
            return state
    }
}