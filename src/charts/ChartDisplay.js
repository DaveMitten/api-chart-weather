import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import './index.css';

const apiKey = '795729c8653e345f482c1cc215d655ab';
const headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('Authorization', `Bearer ${apiKey}`)
const uri = `https://api.darksky.net/forecast/${apiKey}/`
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';


class DataCharts extends Component {
	state = {
		highestTemp: [],
		lowestTemp: [],
	}

	fetchData = (latitude, longitude) => {
		fetch(corsAnywhere + uri + `${latitude},${longitude}`, {
			method: 'GET',
			headers: this.headers
		})
			.then(response => response.json())
			.then(data => {
				console.log('data: ', data)
				this.setState({
					highestTemp: data.daily.data.map(th => th.temperatureHigh),
					lowestTemp: data.daily.data.map(th => th.temperatureLow),
				})
			})
			.catch(error => console.log('!!!!------ERROR-----!!!!', error))
	}

	componentDidMount() {
		this.fetchData('42.3601', '-71.0589')
	}

	render() {
		const lineData = {
			labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
			datasets: [{
				label: 'Highest temperatures this week',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBorderColor: '#FFA07A',
				borderColor: '#FF6347',
				data: this.state.highestTemp
			},
			{
				label: 'Lowest temperatures this week',
				type: 'line',
				data: this.state.lowestTemp,
				borderColor: '#00BFFF',
				pointBorderColor: '#EC932F',
			}
			]
		}

		const BarData = {
			labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
			datasets: [
				{
					label: 'High Temp',
					backgroundColor: '#FF0000',
					borderColor: '#FF0000',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
					hoverBorderColor: '#FF6347',
					data: this.state.highestTemp
				},
				{
					label: 'Low Temp',
					backgroundColor: '#00BFFF',
					borderColor: '#00BFFF',
					borderWidth: 1,
					hoverBackgroundColor: '#F0F8FF	',
					hoverBorderColor: '#00BFFF',
					data: this.state.lowestTemp
				}
			]
		}

		return (
			<div style={{
				margin: 'auto',
				height: '500px',
				width: '500px',
				display: 'flex',
				flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
			}}>
				<Line
					data={lineData}/>
				<Bar
					data={BarData} />
			</div>
		)
	}
}

export default DataCharts;
