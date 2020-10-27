import React, {createContext, useReducer} from 'react'


const initialState = {counter: 0};
const AppContext = createContext()
const { Provider } = AppContext;


const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
      switch(action.type) {
        case 'todo':
          return { ...state, counter: state.counter + parseInt(action.text)};
        default:
          return state;
      };
    }, initialState);
  
    return <Provider value={{ store: state , dispatch }}>{children}</Provider>;
  };

  export {
    AppContext, StateProvider
  }