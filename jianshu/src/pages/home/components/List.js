import React from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends React.Component {
    render() {
        const { list } = this.props
        return (
            <div>
                {
                    list.map(item => (
                        <ListItem key={item.get('id')}>
                            <ListInfo>
                                <h3 className="title">{ item.get('title') }</h3>
                                <p className="desc">{ item.get('content') }</p>
                            </ListInfo>
                        </ListItem>
                    ))
                }
            </div>
        )
    }
}

const mapState = state => ({
    list: state.get('home').get('articleList')
})

export default connect(mapState)(List)