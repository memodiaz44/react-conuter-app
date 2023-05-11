import './App.css';
import logo from './image/logo.JPG'
import Button1  from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';


function App() {
  const [numClicks, setNumClicks ] = 
  useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1);

    console.log('click');
  }


  const resetCounter = () => {
    setNumClicks(0);
    console.log('reset');


  }



   return (
    <div className="App">
      <div className='logo-conteiner'>
        <img 
        className='logo'
        src={logo}
        alt=""
        />
      </div>
      <div className='main-conteiner'>
        <Counter numClicks={numClicks} 
        
        />
        <Button1
        text="Click"
        isClickButtom={true}
        manageClick={manageClick}
        /><Button1
        text='restart'
        isClickButtom={false}
        manageClick={resetCounter}
        />


      </div>
  
    </div>
  );
}

export default App;
