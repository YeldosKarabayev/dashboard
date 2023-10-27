import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar} from "./components/index";
import { useStateContext } from './contexts/ContextProvider';

import './App.css';
import Airdrops from './pages/Airdrops';

const App = () => {
    
  return (
    <BrowserRouter>
      <div className='flex'>
            <Sidebar />
                <div className='w-full'>
                    <Navbar /> 
                    <Airdrops />
                </div>
            </div>
    </BrowserRouter>
  )
}

export default App