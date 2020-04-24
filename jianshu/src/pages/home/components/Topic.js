import React from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends React.Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map(item => (
                        <TopicItem key={item.get('id')}>{item.get('title')}</TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapState = state => ({
    list: state.get('home').get('topicList')
})

export default connect(mapState, null)(Topic)