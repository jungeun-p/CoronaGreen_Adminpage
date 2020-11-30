import React from 'react';
import AppRouter from './Components/user/RouterComponent';
import QnaRouter from './Components/user/RouterComponent_qna';
import DonaList from './Components/user/donaList';
import DonaChart from './Components/user/donaChart';
import '@fortawesome/fontawesome-free/js/all.js';
import './app.css';

const App = () => {
  return (
    <div>
      <div className="container">
        <p className="logo">ADMIN PAGE</p>
        <div className="Dona">
          <DonaChart />
          <DonaList />
        </div>
        <div className="list">
          <AppRouter />
          <QnaRouter />
        </div>
      </div>
    </div>
  );
}



export default App;
