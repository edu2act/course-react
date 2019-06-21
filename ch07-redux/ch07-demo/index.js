import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import 'antd/dist/antd.css';
import { Input, Button,List} from 'antd';

// 应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
// 惟一改变 state 的办法是触发 action，一个描述发生什么的对象。 
// 为了描述 action 如何改变 state 树，你需要编写 reducers。
class App extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        console.log(this.state)
        store.subscribe(()=>{
            this.setState(store.getState())
        })
    }
    handleChange = (e)=>{
        let action = {
            type:'change_input_value',
            value:e.target.value
        }
        store.dispatch(action)
    }
    handleClick = ()=>{
        let action = {
            type:'add_todo_item',
        }
        store.dispatch(action);
    }
    handleDel = (index)=>{
        let action = {
            type:'delete_todo_item',
            index
        }
        store.dispatch(action);
    }
    render(){
        
        return (
            <div>
                <div>
                    <Input 
                        value={this.state.inputValue}  
                        style={{ width: 500,marginRight:10 }} 
                        defaultValue="请输入代办事项" 
                        onChange = {this.handleChange}
                    />
                    <Button onClick={this.handleClick} type="primary">提交</Button>
                </div>
                <List style={{width:500,marginTop:20}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>)}
                />
                 
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
