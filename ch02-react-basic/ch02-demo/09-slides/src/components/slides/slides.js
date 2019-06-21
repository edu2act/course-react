import React, { Component } from 'react'
import './slides.css';
import Slide from './slide';
import Dots from './dots';
import Arrow from './arrow';
export default class slides extends Component {
    constructor(){
        super();
        this.state = {
            index:0
        };
    }
    move = (step)=>{
        let index = this.state.index;
        if(step>=0){
            index = step;
        }else if(step===-1){
            index--;
        }else{
            index++;
        }
        if(index > this.props.items.length){
            this.slides.style.transitionDuration = 0+'s';
            this.slides.style.left = 0;
            setTimeout(()=>{
                this.slides.style.transitionDuration = 1+'s';
                index = 1;
                this.setState({
                    index:index
                })
            },0)
            return;
        }
        if(index < 0){
            this.slides.style.transitionDuration = 0+'s';
            this.slides.style.left = this.props.items.length*-600 + 'px';
            setTimeout(()=>{
                this.slides.style.transitionDuration = 1+'s';
                index = this.props.items.length - 1;
                this.setState({
                    index:index
                })
            },0)
            return;
        }
        this.setState({
            index:index
        })
    }
    go = ()=>{
        this.timerId = setInterval(()=>{
            this.move();
        },2000)
    }
    componentDidMount(){
        this.slides = document.querySelector('.slides');
        if(this.props.auto){
            this.timerId = setInterval(()=>{
                this.move();
            },this.props.delay*1000);
        }
    }
    render() {
        
        return (
            <div onMouseOver={()=>clearInterval(this.timerId)} onMouseOut={this.go} className="slides-wrapper">
                <Slide speed={this.props.speed} index={this.state.index} items={this.props.items}/>
                <Dots move={this.move} items={this.props.items} pager={this.props.pager} index={this.state.index}/>
                <Arrow move={this.move}/>
            </div>
        )
    }
}
