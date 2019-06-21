import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

	
// ReactDOM.render(<h1>hello world</h1>, document.getElementById('root')); 

// jsx语法（语法糖）
// const ele = <h1>hello world</h1>;
// console.log(ele);
// ReactDOM.render(ele, document.getElementById('root'));

// jsx中使用表达式
// const str = 'Hello React！！'
// const ele = <h1>{ str }</h1>;
// ReactDOM.render(ele, document.getElementById('root')); 

// 元素包含：元素类型、元素属性、子节点
// react 元素实际上是“类似”下面的普通的JavaScript对象
// const ele = {
// 	type:'h1',
// 	props:{
// 		className:'box',
// 		id:'box',
// 		// children:['hello']
// 	}
// }

// 当遇到jsx表达式的时候，通过React.createElement方法返回类似上述对象
// 参数：元素类型，元素属性，子节点
// const ele = React.createElement('h1',{className:'box'},'hello');
// 包含元素节点时
const ele = React.createElement('h1',{className:'box'},'hello',React.createElement('p',{className:'box'},'world'));
ReactDOM.render(ele, document.getElementById('root')); 