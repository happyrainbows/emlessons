import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect, Fragment} from 'react';

function App() {
  const [biologicalSex, setbiologicalSex] = useState(null)
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
   
  };
  const getSex = async () => {
    setbiologicalSex("curiousgeorge");
  }
  const getMaleSex = async () => {
    setbiologicalSex("Male");
  }
  const getFemaleSex = async () => {
    setbiologicalSex("Female");
  }
  
  const renderFirstContainer = () => {
    return (
      <div className="App">
        <p>hi, are you a male?</p>
        <button onClick={getMaleSex}> Male </button>
        <button onClick={getFemaleSex}> Female </button>
       
     
      </div>);    
    }
    const renderFirstFirstContainer = () => {
      return (
        <div className="App">
          <div className="dropdown">
        <button onClick={handleOpen}>Genetic Disorder</button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button onClick={getSex}>Cystic Fibrosis</button>
            </li>
            <li className="menu-item">
              <button onClick={getSex}>Tay-Sachs</button>
            </li>
          </ul>
        ) : null}
        {open ? <div>Is Open</div> : <div>Is Closed</div>}
      </div>
       
        </div>);    
      }

  const renderMaleContainer = () => {
    return (
      <div className="App">
        <p>Yay you are a {biologicalSex}</p>
      </div>);    
    }
  const renderFemaleContainer = () => {
     return (
       <div className="App">
          <p>Yay you are a {biologicalSex}</p>
        </div>);    
      }

  return (
    <div className="App">
      {biologicalSex==null && renderFirstFirstContainer()}
      {biologicalSex === "curiousgeorge" && renderFirstContainer()}
      {biologicalSex==="Male" && renderMaleContainer()}
    </div>
  );
}

export default App;
