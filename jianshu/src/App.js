import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import store from './store'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle />
                <BrowserRouter>
                    <Header />
                    <Route path='/' exact component={Home} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/detail' exact component={Detail} />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
