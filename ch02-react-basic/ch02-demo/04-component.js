import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 组价定义
// 函数定义
// function Hello(props){
// 	console.log(arguments)
// 	return <h1>Hello {props.name}</h1>;
// } 
// 类定义
class Hello extends React.Component{
	render(){
		// this就是当前组件，包含
		console.log(this)
		return <h1>Hello { this.props.name }</h1>
	}
} 
ReactDOM.render(<Hello name="React"/>, document.getElementById('root'));