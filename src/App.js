import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { rootStore } from './root/rooStore';
import Main from './components/main/Main';
// import Playground from './playground/Playground';

const App = (props) => {
  return (
    <Provider store={rootStore}>
      {/* <Playground /> */}
      <Main />
    </Provider>    
  );
}

export default App;
