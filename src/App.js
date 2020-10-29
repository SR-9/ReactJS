import React, { useEffect } from 'react'
import './App.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import  {StateProvider} from './store/store'
import LoginScreen from './screen/auth/login_screen'
import { blue, orange } from '@material-ui/core/colors';


const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: orange[500],
    },
    
  },
});

function App() {

  useEffect(() => document.title = "Demo")
  
  return (
    <ThemeProvider theme={outerTheme}>
      <StateProvider>
      <div className="App">
         <LoginScreen />
      </div>
    </StateProvider>
    </ThemeProvider>
  )
}

export default App;
