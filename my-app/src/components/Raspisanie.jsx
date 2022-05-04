import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {
  render() {
    return (
      <div className="middle">
        <table className="TypeAbTable" id="TableTypeAb">
                <tbody>
                    <tr className="tableHeader"><th>Название</th><th>Стоимость</th></tr>
                    
                   
                </tbody>
            </table>
        
      </div>
    )
  }
}
