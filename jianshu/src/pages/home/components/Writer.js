import React from 'react'
import { WriterWrapper, WriterItem } from '../style'
import { connect } from 'react-redux'

class Writer extends React.PureComponent {
    render() {
        const { list } = this.props
        return (
            <WriterWrapper>
                {
                    list.map(item => (
                        <WriterItem key={item.get('id')}>
                            <img
                                className="writer-pic"
                                src={item.get('url')}
                                alt=""
                            />
                            <div className="writer-info">
                                <div className="writer-name">{item.get('name')}</div>
                                <div className="writer-detail">写了{item.get('total')}k字，{item.get('liked')}k喜欢</div>
                            </div>

                        </WriterItem>
                    ))
                }
            </WriterWrapper>
        )
    }
}

const mapState = state => ({
    list: state.get('home').get('writerList')
})

export default connect(mapState)(Writer)