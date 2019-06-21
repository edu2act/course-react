import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 更新已渲染元素，观察渲染效率
function tick() { 
	const ele = (
		<div>
			<p>hello world</p>
			{new Date().toLocaleTimeString()}
		</div> 
	); 	
	ReactDOM.render(ele, document.getElementById('root')); 
} 
setInterval(tick, 1000);

