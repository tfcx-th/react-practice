import React from 'react'
import { HeaderWrapper, Logo } from './style'

class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'/>
            </HeaderWrapper>
        )
    }
}

export default Header
