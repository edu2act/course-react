import React, { Component } from 'react'

export default class slide extends Component {
  render() {
    let style = {
        width: (this.props.items.length+1)*600,
        left: this.props.index*-600,
        transitionDuration: this.props.speed + 's'
    }
    return (
        <ul style={style} className="slides">
            {
                this.props.items.map((item,index)=>(
                    <li className="slide" key={index}>
                        <img src={item} alt=""/>
                    </li>
                ))
            }
            <li className="slide"><img src={this.props.items[0]} alt=""/></li>
        </ul>
    )
  }
}
