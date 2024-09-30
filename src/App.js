import './App.css';
import CardContainer from './components/CardContainer';
import CountryCardContainer from './components/CountryCardContainer';
import Header from './components/Header';
import Main from './components/Main';
import SideBar  from './components/SideBar';
import { useState } from'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {



  return (
<>
<BrowserRouter> 
        <Routes>
        <Route path='/' element= {<Main/>}>
         <Route index element={<h1>welcome</h1>}/>
        <Route path='/pokemones' element= {<CardContainer/>}/> 
          <Route path='/contries' element= {<CountryCardContainer/>}/> 
         </Route>

          
        </Routes>

</BrowserRouter>
    

</>
  );
}

export default App;
