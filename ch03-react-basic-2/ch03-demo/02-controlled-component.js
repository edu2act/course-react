import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TodoList from './components/todolist/todolist';

class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            inputValue:'hello'
        }
    }
    // 不设置onChange事件，input无法修改里面的内容，重新设置state，render被调用，重新渲染
    handleChange = (e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
                <button>提交</button>
            </div>
        )
    }
}

ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
);
