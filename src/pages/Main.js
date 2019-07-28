import React, { Component } from 'react';
import ChartDisplay from '../charts/ChartDisplay'
 import Header from '../common/Header.js'

class Main extends Component {
  render() {

	const title= 'API data displayed with chart.js'

	return (
	  <div style={{margin: 'auto', hight: '100vh' }}>
	  <Header title={title} />
      <ChartDisplay />
	  </div>
	)
  }
}

export default Main;
