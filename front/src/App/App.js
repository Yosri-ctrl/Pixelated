import React from 'react';
import Header from "../Header/Header";
import Home from "../Home/Home";
import Game from "../Game/TicTac/ticTac";
// import Board from '../Game/Mines/Board';
import './App.scss';


export default function App() {
	return (
		<div>
			<Header />
			{/* <Home /> */}
			<Game />
		</div>
	)
}
