import React, { Component } from 'react'

export default class dots extends Component {
  render() {
    return (
        <ul className="dots" style={{display:this.props.pager?'block':'none'}}>
            {
                this.props.items.map((item,index)=>(
                    <li onClick={()=>this.props.move(index)} className={this.props.index===index||(this.props.index===this.props.items.length&&index===0)?'active':''} key={index}></li>
                ))
            }
        </ul>
    )
  }
}
