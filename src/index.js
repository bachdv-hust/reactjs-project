import React from 'react';
import ReactDOM from 'react-dom';
import { AppStyle, height, width } from './AppStyle';
import HomeScreen from './screen/home/HomeScreen';
import LoginScreen from './screen/login/LoginScreen';

ReactDOM.render(
  <React.StrictMode>
    <div style={AppStyle(width("100%"), height("100%"))}>
    <LoginScreen/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);
 
// sua sua sua