import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class News extends Component {
  constructor(){
    super();
    this.state = {
      list:[
        {
          id:1,
          title:'新闻111'
        },
        {
          id:2,
          title:'新闻222'
        },
        {
          id:3,
          title:'新闻333'
        },
      ]
    }
  }
  render() {
    return (
        <ul>
            {
              this.state.list.map((item)=>{
                return (
                  <li key={item.id}><Link to={'/newscontent/'+item.id}>{item.title}</Link></li>
                )
              })
            }
        </ul>
    )
  }
}
