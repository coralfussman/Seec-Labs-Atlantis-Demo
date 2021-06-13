import React from 'react';
import MainContainer from './containers/MainContainer'
import Navbar from './containers/Navbar';
import TideHeader from './components/TideHeader';
import styles from './scss/styles.scss';

function App() {
  return (
    <div className="App">
      <div>
        
        <TideHeader/>
        
      </div>
      <div className="columnCenterContainer"><MainContainer/></div>
    </div>

  );
}

export default App;