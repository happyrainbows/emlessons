import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect, Fragment} from 'react';

function App() {
  const [biologicalSex, setbiologicalSex] = useState(null)


  const getBiologicalSex = async () => {
    setbiologicalSex("Male");
  }

  const renderFirstContainer = () => {
    return (
      <div className="App">
        <p>hi, are you a male?</p>
        <button onClick={getBiologicalSex}> Male </button>

      </div>);    
    }


  const renderMaleContainer = () => {
    return (
      <div className="App">
        <p>Congratulations you are a {biologicalSex}</p>
      </div>);    
    }


  return (
    <div className="App">
      {biologicalSex == null && renderFirstContainer()}
      {biologicalSex==="Male" && renderMaleContainer()}
    </div>
  );
}

export default App;
