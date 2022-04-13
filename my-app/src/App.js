
import React from 'react';
import Ccomponent from './components/Ccomponent';

import Cc2 from './components/Cc2';
import Cc3 from './components/Cc3';
import './styles/mycss.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
    

      <Router>
      
          <div className='appclass'>
            <Ccomponent/>
             

              
                <Routes>
                  <Route path="/" element={<Cc2 />}/>
                  <Route path="/timesheet" element={<Main />}/>
                </Routes>
              
            <Cc3/>
          </div>
        </Router>


     
      
      
      
    
  );
}

export default App;
