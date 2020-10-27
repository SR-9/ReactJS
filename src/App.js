import React, { useReduce } from 'react'
import './App.css'

import  HomeScreen from "./screen/home/home_screen"
import  DetailScreen from "./screen/detail/detail_screen"
import  {StateProvider} from './store/store'



function App() {
  return (
    <StateProvider>
      <div className="App">
          <HomeScreen />
          <DetailScreen />
      </div>
    </StateProvider>
  )
}

export default App;
