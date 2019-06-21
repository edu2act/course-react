import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const eleObj = {
	type:'h1',
	props:{
		className:'box',
		id:'box',
		children:['hello']
	}
}
function render(eleObj,container){
	let {type,props} = eleObj;
	let ele = document.createElement(type);
	for(let attr in props){
		if(attr === 'children'){
			props.children.forEach(item=>{
				if(typeof item === 'object'){
					render(props.children,ele);
				}else{
					let txt = document.createTextNode(item);
					ele.appendChild(txt);
				}
			})
		}else if(attr === 'className'){
			ele.setAttribute('class',props['className']);
		}else{
			ele.setAttribute(attr,props[attr]);
		}
	}
	container.appendChild(ele);
}
render(eleObj,document.querySelector('#root'));
