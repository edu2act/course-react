import React, { Component } from 'react'

export default class Newscontent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        // 动态路由
        console.log(this.props.match.params)
    }
    render() {
        return (
            <div>
                这是新闻{this.props.match.params.id}详情页
            </div>
        )
    }
}

