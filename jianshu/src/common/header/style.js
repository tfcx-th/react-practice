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

export const Nav = styled.div`
    box-sizing: border-box;
    margin: 0 150px 0 100px;
    padding-right: 70px;
    height: 100%;
`

export const NavItem = styled.div`
    padding: 0 15px;
    font-size: 17px;
    line-height: 56px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    box-sizing: border-box;
    margin: 9px 0 9px 20px;
    padding: 0 20px;
    width: 160px;
    height: 38px;
    border: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
`
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin: 9px 20px 9px 0;
    padding: 0 20px;
    font-size: 14px;
    line-height: 38px;
    border: 1px solid #ec6149;
    border-radius: 19px;
    &.reg {
        color: #ec6149;
    }
    &.write {
        color: white;
        background: #ec6149;
    }
`