import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
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
import { Link } from 'react-router-dom'

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
        const { focused, login, logout } = this.props
        return (
            <HeaderWrapper>
                <Link to='/'><Logo href='/' /></Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? <NavItem className="right" onClick={ logout }>退出</NavItem>
                            : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={ this.props.focused }
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={ focused ? 'focused' : '' }
                                onFocus={ this.props.handleInputFocus }
                                onBlur={ this.props.handleInputBlur }
                            />
                        </CSSTransition>
                        <div className="search-icon" />
                        { this.getListArea(focused) }
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
        list: state.get('header').get('list'),
        login: state.get('login').get('login')
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
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
