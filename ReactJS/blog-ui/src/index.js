import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { increment } from './actions/count'
import App from './app'


const store = configureStore()  // we are creating the store

//demo & testing time
store.subscribe(() => {
    console.log(store.getState())
})

//store.dispatch(increment())--- for testing

const jsx = (
    <Provider store={store} >
        <App />
    </Provider>
)  // provider is only used once 

ReactDOM.render(jsx, document.getElementById('root'))