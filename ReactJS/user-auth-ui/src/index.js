import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import axios from './config/axios'
import { setUser } from './actions/user'
import { startSetPosts } from './actions/posts'

import App from './App';

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

console.log(store.getState())

//write code to handle page reload
//To set up initial set of values

if (localStorage.getItem('userAuth')) {
    axios.get('/users/account', {
        headers: {
            'x-auth': localStorage.getItem('userAuth')
        }
    }).then((response) => {
        store.dispatch(setUser(response.data))
    })

    //to get the post values
    store.dispatch(startSetPosts())
}

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));