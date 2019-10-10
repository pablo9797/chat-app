import React from 'react';
import Contact from './components/Contact';
import Bart from './components/Bart';
import Ralph from './components/Ralph';
import Homer from './components/Homer';
import './App.css'



function App() {
  return (
    <div className="App">
     <Contact {...Homer}/>
     <Contact {...Ralph}/>
   <Contact {...Bart}/>

    </div>
  );
}

export default App;
