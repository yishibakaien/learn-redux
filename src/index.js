import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

// 主要是用于在生产环境中为用户在本地创建一个 service worker 来缓存资源到本地
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
