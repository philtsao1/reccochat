import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


class Home extends Component {
	constructor() {
		super();
	}

	render(){
		return(
			<div id="recco-chat">
					<h2>ReccoChat</h2>
					<div id="chat-window">
							<div id="output"></div>
							<div id="feedback"></div>
					</div>
					<div id="home">
					<input id="user" type="text" placeholder="User" />
					<input id="message" type="text" placeholder="Message" />
					<button id="send">Send</button>
					</div>
			</div>
		);
	}
}

export default Home;
