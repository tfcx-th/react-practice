import React from 'react'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'
import { connect } from 'react-redux'

class Detail extends React.Component {
    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>{ title }</Header>
                <Content>{ content }</Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.changeDetailData()
    }
}

const mapDispatch = dispatch => ({
    changeDetailData() {
        dispatch(actionCreators.getDetailData())
    }
})

const mapState = state => ({
    title: state.get('detail').get('title'),
    content: state.get('detail').get('content')
})

export default connect(mapState, mapDispatch)(Detail)