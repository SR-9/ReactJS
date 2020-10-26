import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import  HomeScreen from "./screen/home_screen";

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
          <HomeScreen />
      </div>
    </Provider>
  )
}

export default App;
