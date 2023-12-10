import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); /*index.html 에 있는 React 루트를 만들고 해당 루트를 반환한다.*/
root.render(   /*반환된 루트를 통해 render가 가능하다 */
  <React.StrictMode> {/*애플리케이션에 잠재적인 문제를 알기위한 도구*/}
    <App /> {/* react 를 실행하면 보이는 초기 UI*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); {/*측정갑들 */}
