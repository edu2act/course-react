
![](logo.png)
# **react-router**
## 简介：
react-router-dom 是一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。

## 安装：
```
npm install react-router-dom --save-dev 
```
## 组件中引用：
```
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
```
## 路由配置
```
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './components/router/home';
import About from './components/router/about';
import News from './components/router/news';
import './index.css';

class App extends Component{
   
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/about">关于我们</Link>
                        </li>
                        <li>
                            <Link to="/news">新闻</Link>
                        </li>
                    </ul>
                    <hr/>
               
                    <Route exact  path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/news' component={News}/>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

```