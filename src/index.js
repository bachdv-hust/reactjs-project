import React from 'react';
import ReactDOM from 'react-dom';
import { AppStyle, background, height, width } from './AppStyle';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Colors } from './AppColor';



ReactDOM.render(
  // height:'100vh',
  <React.StrictMode>
    <div style= {{maxWidth: '1080px',  margin: 'auto', minHeight: "100vh"}}>
      <App/>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);