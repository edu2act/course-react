import React, { Component } from 'react';
// 引入 url 模块来解析传过来的值
import url from 'url';
export default class Goodscontent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0
        }
    }
    componentDidMount(){
        // get传值
        console.log(url.parse(this.props.location.search,true).query.id);
        this.setState({
            id:url.parse(this.props.location.search,true).query.id
        })
    }
    render() {
        return (
            <div>
                这是商品{this.state.id}详情页
            </div>
        )
    }
}

