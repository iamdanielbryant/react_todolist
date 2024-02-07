import React from 'react';
import '../styles/inputfield.css';

class NewTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputText: ""
        }

        this.onKeyDownEvent = this.onKeyDownEvent.bind(this);
    }

    onKeyDownEvent(e){
        if (e.key === 'Enter'){
            this.props.addNewTodo(this.state.inputText)
            this.setState({inputText: ""})
        }
    }
    
    render(){
        return (
            <div className="flex-item">
                <input type="text" className="inputField" placeholder="Type something..." value={this.state.inputText} onChange={(e) => {this.setState({inputText: e.target.value})}} onKeyDown={this.onKeyDownEvent} autoFocus />
            </div>
        );
    }
    
}

export default NewTodo;