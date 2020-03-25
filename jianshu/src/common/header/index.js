import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'

class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavSearch />
                </Nav>
                <Addition>
                    <Button className="write">写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header
