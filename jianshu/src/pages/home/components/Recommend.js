import React from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends React.PureComponent {
    render() {
        const { list } = this.props
        return (
            <RecommendWrapper>
                {
                    list.map(item => (
                        <RecommendItem key={item.get('id')}>
                            <img
                                className="recommend-pic"
                                src={item.get('url')}
                                alt=""
                            />
                        </RecommendItem>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapState = state => ({
    list: state.get('home').get('recommendList')
})

export default connect(mapState)(Recommend)