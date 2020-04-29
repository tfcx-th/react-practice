import axios from 'axios'
import * as constant from './constant'

const changeLogin = () => ({
    type: constant.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constant.CHANGE_LOGOUT,
    value: false
})

export const login = (account, password) => {
    return async dispatch => {
        const { data } = await axios.get(`./api/login.json?account=${ account }&password=${ password }`)
        if (data.data) {
            dispatch(changeLogin())
        } else {
            alert('Login failed')
        }
    }
}