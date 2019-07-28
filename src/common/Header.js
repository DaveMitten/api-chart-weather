import React, { Component } from 'react';

 class Header extends Component {
	constructor(props){
		super(props);
	}

  render() {
	return (
	  <>
		<header style={{padding: '10px 20px ', fontSize: '28px', fontWeight: 'bold' }}>{this.props.title}</header>
	  </>
	)
  }
}


export default Header;