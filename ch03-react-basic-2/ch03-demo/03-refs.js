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
    handleClick = ()=>{
        console.log(this.input.value)
    }
    componentDidMount(){
        this.input.focus();
    }
    render(){
        return (
            <div>
                <input type="text" defaultValue='hello' ref={input=>this.input = input}/>
                <button onClick={this.handleClick}>提交</button>
            </div>
        )
    }
}

ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
);
