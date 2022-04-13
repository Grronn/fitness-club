import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div className="middle">
        <table border="1" cellspacing="0"  width="400" height="200">
		<tr>
            <th>Время</th>
			<th>Понедельник</th>
			<th>Вторник</th>
			<th>Среда</th>
            <th>Четверг</th>
			<th>Пятница</th>
			<th>Суббота</th>
            <th>Воскресенье</th>
			
		</tr>
		<tr align="center">
			<td>10:30</td>
			<td>Аэробика</td>
			<td>ОФП</td>
			<td>Растяжка</td>
            <td>Аэробика</td>
			<td>ОФП</td>
			<td>Растяжка</td>
            <td>Растяжка</td>
		</tr>
		<tr align="center">
			<td>15:30</td>
			<td>Аэробика</td>
			<td>ОФП</td>
			<td>Растяжка</td>
            <td>Аэробика</td>
			<td>ОФП</td>
			<td>Растяжка</td>
            <td>Растяжка</td>
		</tr>
		<tr align="center">
			<td>19:30</td>
			<td>Аэробика</td>
			<td>ОФП</td>
			<td>Растяжка</td>
            <td>Аэробика</td>
			<td>ОФП</td>
			<td>Растяжка</td>
            <td>Растяжка</td>
		</tr>
		
		
	</table>
        
      </div>
    )
  }
}
