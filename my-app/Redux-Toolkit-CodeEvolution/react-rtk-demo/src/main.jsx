import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
import { Provider } from 'react-redux'
import store from './app/store'
import './index.css'
import App from './App'

// axios.interceptors.request.use((request)=>{
//   console.log(request)
//   request.headers.channelName='venkat'
//   return request
// })

// axios.interceptors.response.use((response)=>{
//   console.log(response)
  
// })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
