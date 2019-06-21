import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue:'',
			list:[]
		}
	}
	handleChange = (e)=>{
		this.setState({inputValue:e.target.value})
	}
	buttonCLick = ()=>{
		this.setState({
			list:[...this.state.list,this.state.inputValue],
			inputValue:''
		})
	}
	itemDelete = (idx)=>{
		let list = [...this.state.list];
		list.splice(idx,1);
		this.setState({
			list:list
		})
	}
	render(){
		return(
			<Fragment>
				<div>
					<input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
					<button onClick={this.buttonCLick}>添加数据</button>
				</div>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return <li key={index}>{item}  --- <button onClick={this.itemDelete.bind(this,index)}>删除</button></li>
						})
					}
				</ul>
			</Fragment>
		)
	}
}
ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
);