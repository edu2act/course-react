import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Goods extends Component {
  constructor(){
    super();
    this.state = {
      list:[
        {
          id:1,
          title:'商品111'
        },
        {
          id:2,
          title:'商品222'
        },
        {
          id:3,
          title:'商品333'
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
                  <li key={item.id}><Link to={'/goodscontent?id='+item.id}>{item.title}</Link></li>
                )
              })
            }
        </ul>
    )
  }
}
