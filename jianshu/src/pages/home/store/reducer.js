import { fromJS } from 'immutable'
import recommend1 from '../../../statics/recommend-1.png'
import recommend2 from '../../../statics/recommend-2.png'
import recommend3 from '../../../statics/recommend-3.png'
import recommend4 from '../../../statics/recommend-4.png'
import userUrl from '../../../statics/user.png'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点'
    }, {
        id: 2,
        title: '手绘'
    }, {
        id: 3,
        title: '读书'
    }, {
        id: 4,
        title: '摄影'
    }, {
        id: 5,
        title: '历史'
    }, {
        id: 6,
        title: '旅行，在路上'
    }],
    articleList: [{
        id: 1,
        title: '逍遥游',
        content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也，怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”。。。'
    }, {
        id: 2,
        title: '逍遥游',
        content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也，怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”。。。'
    }, {
        id: 3,
        title: '逍遥游',
        content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也，怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”。。。'
    }, {
        id: 4,
        title: '逍遥游',
        content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也，怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”。。。'
    }, {
        id: 5,
        title: '逍遥游',
        content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也，怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”。。。'
    }, {
        id: 6,
        title: '逍遥游',
        content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也，怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”。。。'
    }, {
        id: 7,
        title: '逍遥游',
        content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也，怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”。。。'
    }],
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
    }]
})

export default (state = defaultState, action) => {
    return state
}