import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 运用组件和属性
// function Clock(props){
// 	return (
// 		<div>
// 			<p>hello world</p>
// 			<h2>{props.date.toLocaleTimeString()}</h2>
// 		</div>
// 	)
// }
// function tick() { 
// 	ReactDOM.render(<Clock date={new Date()}/>, document.getElementById('root')); 
// } 
// setInterval(tick, 1000);

// 运用状态
class Clock extends React.Component{
	constructor(){
		super();
		this.state = {date:new Date()}
		// setInterval(()=>{
		// 	this.setState({date:new Date()})
		// },1000);
	}
	render(){
		return (
			<div>
				<p>hello world</p>
				<h2>{this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}
ReactDOM.render(<Clock/>, document.getElementById('root'));