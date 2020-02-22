import styled from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100px;
    height: 58px;
    background: url(${logo});
    background-size: contain;
`
