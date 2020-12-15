import React, { useState, useEffect } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import SushiContainer from './components/SushiContainer';
import Table from './components/Table';

function App() {
  const [sushis, setSushis] = useState([])
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3000/sushis')
      .then(resp => resp.json())
      .then(sushis => setSushis(sushis))
      .catch(e => console.error(e))
  }, []);

  //  render only 4 sushis at a time
  const gimmeFour = () => {
    return sushis.slice(startIndex, startIndex + 4)
  };

  const moreSushi = () => {
    setStartIndex(startIndex + 4)
  };
  
  return (
    <div className="app">
      <SushiContainer
        sushis={gimmeFour()}
        moreSushi={moreSushi}
      />
      <Table />
    </div>
  );
}

export default App;
