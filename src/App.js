import React from 'react';
import './App.css';
import BasicRouter from './Config/Router/Router'
import Store from './Store'
import { Provider } from 'react-redux'
function App() {
  return (
    
    <Provider store={Store} >
      <BasicRouter />
    </Provider>

  );
}

export default App;
