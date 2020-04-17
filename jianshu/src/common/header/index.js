import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoItem,
    Addition,
    Button
} from './style'

class Header extends React.Component {
    getListArea() {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <div>
                        {
                            this.props.list.map(item => {
                                return <SearchInfoItem key={ item }>{ item }</SearchInfoItem>
                            })
                        }
                    </div>
                </SearchInfo>
            )
        } else {
            return
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={ this.props.focused }
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={ this.props.focused ? 'focused' : '' }
                                onFocus={ this.props.handleInputFocus }
                                onBlur={ this.props.handleInputBlur }
                            />
                        </CSSTransition>
                        <div className="search-icon" />
                        { this.getListArea( this.props.focused) }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="write">写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
