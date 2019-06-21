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
                    {/* exact 是严格匹配 */}
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
