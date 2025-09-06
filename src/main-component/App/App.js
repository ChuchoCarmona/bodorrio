import React from 'react';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import './App.css';
import AllRoute from '../router';


const App = () => { 

  return (
    <div className="App">
        <AllRoute/>
        <Footer/>
        <Scrollbar/>
    </div>
  );
}

export default App;
