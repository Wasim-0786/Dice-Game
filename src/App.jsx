import './App.css'
import { useState } from 'react';
import Gamepage from './components/Gamepage'
import Homepage from './components/Homepage'

function App() {
 
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamepage = () => {
    setIsGameStarted((prev) => !prev);
  };
 
  return (
    <>
      {
        isGameStarted ? <Gamepage/> : <Homepage toggle={toggleGamepage}/>
        
      }
     
    </>
  );
}

export default App
