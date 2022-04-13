import React, { Component } from 'react';

import { Link } from "react-router-dom";


export default class Ccomponent extends Component {
  render() {
    return (
        
            <div className="header">
            <div className="1">
                <div className="logo">
                    

                </div>
            </div>
            <div className="2">
                <Link to="/">Главная</Link>
                
            </div>
            <div className="3">
                <Link to="/timesheet">Расписание</Link>
            </div>
            <div className="4">
                Команда
            </div>
            



        </div>

        
        

        


        

    
    )
  }
}
