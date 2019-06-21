import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends Component{
    componentDidMount() {
        // mdn：fetch讲解地址：
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch

        
        // fetch 默认是get请求，返回的数据需要通过json()函数转成json数据
        // fetch('/api/courses').then(res=>res.json()).then((res)=>{
        //     console.log(res);
        // })


        // fetch发送post请求

        // fetch('/api', {
        //     method: 'post',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "username":"tom",
        //         "passwd":"123456"
        //     })
        // }).then(res=>res.json()).then((res)=>{
        //     console.log(res);
        // }).catch(error => console.log('error is', error));

        // fetch配置第二个参数
        // fetch('/api/courses', {
        //     method: 'get'
        // }).then(res=>res.json()).then((res)=>{
        //     console.log(res);
        // }).catch(error => console.log('error is', error));
    }
    render(){
        return (
            <div>fetch 请求</div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);