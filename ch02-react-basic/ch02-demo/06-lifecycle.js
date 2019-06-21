import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 生命周期
// 挂载、更新、卸载、错误
// 挂载：
// constructor() //如果在constructor中要使用this.props,就必须给super加参数：super(props);构造函数是初始化状态的合适位置
// static getDerivedStateFromProps()//需要将其声明为静态方法，如果是实例方法，将不能被识别；
// 用此方法后，componentWillMount、componentWillUpdate等原始的生命周期钩子将不能使用

// componentWillMount() 
// render()
// componentDidMount()
// 更新：
// static getDerivedStateFromProps( )
// shouldComponentUpdate( )
// componentWillUpdate( )
// render( )
// getSnapshotBeforeUpdate( )
// componentDidUpdate( )

function log(msg){
	console.log(msg)
}
class Clock extends React.Component{
	constructor(props){
		super(props);//如果需要在构造函数中使用props，需当参数传入props
		this.state = {
			date:new Date(),
		}
		log('1-constructor');
	}
	tick(){
		this.setState({date:new Date()})
	}
	static getDerivedStateFromProps(nextProps, prevState){
		log('2-getDerivedStateFromProps');
		return null;
	}
	// componentWillMount(){
	// 	log('componentWillMount');
	// }
	componentDidMount() {
		console.log('4-componentDidMount');
		// this.timerID = setInterval(
		//   () => this.tick(),
		//   1000
		// );
	}
	shouldComponentUpdate(){
		log('5-shouldComponentUpdate');
		return true;
	}
	// componentWillUpdate(){
	// 	log('componentWillUpdate')
	// }
	getSnapshotBeforeUpdate(){
		log('6-getSnapshotBeforeUpdate');
		return null;
	}
	componentDidUpdate(){
		log('7-componentDidUpdate'); 
	}
	componentWillUnmount() {
		console.log('componentWillUnmount')
		clearInterval(this.timerID);
	}
	render(){
		log('3-render');
		return (
			<div>
				<p>hello world</p>
				<h2>{this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}
// Clock.getDerivedStateFromProps();
class App extends React.Component{
	constructor(){
		super();
		this.state = {name:1}
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({name:2})
		},2000);
	}
	render(){
		return <Clock name={this.state.name}/>
	}
}
ReactDOM.render(<App />, document.getElementById('root'));