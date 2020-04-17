import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import store from './store'
import Header from './common/header'

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Provider store={ store }>
                <Header />
            </Provider>
        </div>
    )
}

export default App
