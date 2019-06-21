import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function withFetch(WrappedComponent,url){
    
    class WithFetch extends Component{
        constructor(){
            super();
            this.state = {
                data:''
            }
        }
        componentDidMount = () => {
            fetch(url, {
                method: 'get'
            }).then(res=>res.json()).then((res)=>{
                console.log(res)
                this.setState({
                    data:res
                },()=>{console.log(this.state.data)})
            }).catch(error => console.log('error is', error));
        }
        render(){
            return <WrappedComponent data={this.state.data}/>
        }
        
    }
    WithFetch.displayName = `WithFetch(${getDisplayName(WrappedComponent)})`;
    return WithFetch;
}
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
class RecommendPoetry extends Component{
    render(){
        return (
            this.props.data&&[<h3>{this.props.data.result.title}</h3>,
            <p>{this.props.data.result.authors}</p>,
            <p>{this.props.data.result.content}</p>
            ]
        );
    }
}
class SearchPoetry extends Component{
    render(){
        return (
            this.props.data&&[<h3>{this.props.data.result[0].title}</h3>,
            <p>{this.props.data.result[0].authors}</p>,
            <p>{this.props.data.result[0].content}</p>
            ]
        );
    }
}
const RecommendPoetryWithFetch = withFetch(RecommendPoetry,'https://api.apiopen.top/recommendPoetry')
const SearchPoetryWithFetch = withFetch(SearchPoetry,'https://api.apiopen.top/searchPoetry?name=静夜思')
ReactDOM.render(<SearchPoetryWithFetch />,document.getElementById('root'));