import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Hello extends Component{
    render(){
        return <h1>hello {this.props.name}</h1>
    }
}
Hello.propTypes = {
    name:PropTypes.string.isRequired
}
Hello.defaultProps = {
    name:'world'
}
ReactDOM.render(
    <Hello name='Tom'/>,
    document.getElementById('root')
);