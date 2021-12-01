import React from 'react';
import ReactDOM from 'react-dom';
import { AppStyle, background, borderWidth, height, width } from './AppStyle';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Colors } from './AppColor';

ReactDOM.render(
  <React.StrictMode>
    <div style= {AppStyle(borderWidth(1), {maxWidth: '768px',  margin: 'auto', minHeight: "100vh", background: Colors.color_white})} >
        <App/>
      </div> 

  </React.StrictMode>,
  document.getElementById('root')
);