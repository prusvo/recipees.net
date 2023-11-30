import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Receptury from './pages/Receptury';
import Menu5 from './pages/Menu5';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/menu4' element={<Menu/>}/>
          <Route path='/menu5' element={<Menu5/>}/>
          <Route path='/receptury' element={<Receptury/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
