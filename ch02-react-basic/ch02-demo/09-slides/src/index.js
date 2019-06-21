import React from 'react';
import ReactDOM from 'react-dom';
import Slides from './components/slides/slides';
import './index.css';

let imgs = [
	require('./images/banner01.jpg'),
	require('./images/banner02.jpg'),
	require('./images/banner03.jpg')
]
  
ReactDOM.render(
	<Slides pager={true} speed={1} auto={true} items={imgs} delay={2} />,
	document.getElementById('root')
);