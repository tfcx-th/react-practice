import React from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { Topic, List, Recommend, Writer } from './components'
import { actionCreators } from './store'

const bannerImageUrl = 'https://upload.jianshu.io/admin_banners/web_images/4928/6e9aa1978a269f34cccf0a8971e168ad47b79262.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'

class Home extends React.PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    render() {
        const { showScroll } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={bannerImageUrl} alt='' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
                               : null
                }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = state => ({
    showScroll: state.get('home').get('showScroll')
})

const mapDispatch = dispatch => ({
    async changeHomeData() {
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    },
    changeScrollTopShow() {
        dispatch(actionCreators.toggleTopShow(document.documentElement.scrollTop > 400))
    }
})

export default connect(mapState, mapDispatch)(Home)