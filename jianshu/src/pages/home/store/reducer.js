import { fromJS } from 'immutable'
import * as constant from './constant'
import recommend1 from '../../../statics/recommend-1.png'
import recommend2 from '../../../statics/recommend-2.png'
import recommend3 from '../../../statics/recommend-3.png'
import recommend4 from '../../../statics/recommend-4.png'
import userUrl from '../../../statics/user.png'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [{
        id: 1,
        url: recommend1
    }, {
        id: 2,
        url: recommend2
    }, {
        id: 3,
        url: recommend3
    }, {
        id: 4,
        url: recommend4
    }],
    writerList: [{
        id: 1,
        name: '天赋创新',
        total: 123.4,
        liked: 56,
        url: userUrl
    }, {
        id: 2,
        name: '天赋创新',
        total: 123.4,
        liked: 56,
        url: userUrl
    }, {
        id: 3,
        name: '天赋创新',
        total: 123.4,
        liked: 56,
        url: userUrl
    }, {
        id: 4,
        name: '天赋创新',
        total: 123.4,
        liked: 56,
        url: userUrl
    }, {
        id: 5,
        name: '天赋创新',
        total: 123.4,
        liked: 56,
        url: userUrl
    }],
    showScroll: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            })
        case constant.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state
    }
}