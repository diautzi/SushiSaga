import React, { useState, useEffect } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import SushiContainer from './components/SushiContainer';

function App() {
  const [sushis, setSushis] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then( sushis => setSushis(sushis))
    .catch(e => console.error(e))
  }, [])

  return (
    <div className="App">
      <SushiContainer sushis={sushis}/>
    </div>
  );
}

export default App;
