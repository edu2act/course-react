import React, { Component } from 'react'

export default class arrow extends Component {
  render() {
    return (
        <div className="arrow">
            <span onClick={()=>this.props.move(-1)} className="arrow-left">&lt;</span>
            <span onClick={this.props.move} className="arrow-right">&gt;</span>
        </div>
    )
  }
}
