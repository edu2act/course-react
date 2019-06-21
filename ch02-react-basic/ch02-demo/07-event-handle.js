import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 事件绑定（注意事件名称是驼峰形式）
// function fn(){
// 	console.log('hello')
// }
// let ele = <button onClick={fn}>事件处理</button>
// ReactDOM.render(ele, document.getElementById('root'));

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			content:'hello'
		}
		// this.handleClick = this.handleClick.bind(this);//加上绑定，下面的函数中的this才能指向该组件
	}
	// handleClick(){
	// 	console.log(this);//this是undefined
	// 	this.setState({content:'world'});//报错
	// }

	// 箭头函数形式 this 指向该组件
	handleClick = ()=>{
		console.log(this);
		this.setState({content:'world'})
	}
	render() {
		return (
			<div>
				<p>{this.state.content}</p>
				<button onClick={this.handleClick}>Click</button>
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));