import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { Topic, List, Recommend, Writer } from './components'

const bannerImageUrl = 'https://upload.jianshu.io/admin_banners/web_images/4928/6e9aa1978a269f34cccf0a8971e168ad47b79262.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'

class Home extends React.Component {
    render() {
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
            </HomeWrapper>
        )
    }
}

export default Home