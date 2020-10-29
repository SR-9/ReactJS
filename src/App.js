import React, { useEffect } from 'react'
import './App.css'

import  {StateProvider} from './store/store'
import LoginScreen from './screen/auth/login_screen'



function App() {

  useEffect(() => document.title = "Demo")
  
  return (
    <StateProvider>
      <div className="App">
         <LoginScreen />
      </div>
    </StateProvider>
  )
}

export default App;
