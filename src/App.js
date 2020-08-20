import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { rootStore } from './root/rooStore';
import Main from './components/main/Main';
import { BrowserRouter as Router } from 'react-router-dom';

const App = (props) => {
  return (
    <Provider store={rootStore}>
      <Router>
        <Main />
      </Router>
    </Provider>    
  );
}

export default App;
