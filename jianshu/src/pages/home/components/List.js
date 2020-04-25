import React from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class List extends React.PureComponent {
    render() {
        const { list } = this.props
        return (
            <div>
                {
                    list.map(item => (
                        <Link key={item.get('id')} to="/detail">
                            <ListItem>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('content')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
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