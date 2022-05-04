
import React from 'react';
import Header from './components/Header';

import Main from './components/MainPage';
import Footer from './components/Footer';
import './styles/mycss.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Raspisanie from './components/Raspisanie';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    

      <Router>
      
          <div className='appclass'>
            <Header/>
             

              
                <Routes>
                  <Route path="/" element={<Main />}/>
                  <Route path="/timesheet" element={<Raspisanie />}/>
                </Routes>
              
            <Footer/>
          </div>
        </Router>


     
      
      
      
    
  );
}

export default App;
