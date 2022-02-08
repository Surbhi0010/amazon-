import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from './Redux/Reducer';
import {StateProvider} from './Redux/StateProvider'


ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
   <App/>
   </StateProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);
