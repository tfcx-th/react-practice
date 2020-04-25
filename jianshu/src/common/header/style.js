import styled from 'styled-components'
import logo from '../../statics/logo.png'
import searchIcon from '../../statics/search.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    user-select: none;
`
export const Logo = styled.div`
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

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    & .search-icon {
        position: absolute;
        margin: auto 0;
        right: 5px;
        top: 0;
        bottom: 0;
        width: 30px;
        height: 30px;
        background: url(${searchIcon});
        background-repeat: no-repeat;
        transform: scale(0.7);
        cursor: pointer;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    box-sizing: border-box;
    margin: 9px 0 9px 20px;
    padding: 0 30px 0 20px;
    width: 160px;
    height: 38px;
    border: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    outline: none;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all 0.2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all 0.2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    padding: 0 20px;
    left: 0;
    top: 60px;
    width: 240px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const SearchInfoTitle = styled.div`
    margin: 20px 0 15px 0;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin: 0 10px 15px 0;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
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