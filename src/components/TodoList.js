import React from 'react';
import '../styles/todolist.css';

class TodoList extends React.Component {
  
    render(){
        return (
            <div className="flex-item">
                <ul className="list">
                    { this.props.todoItems.map((item,index) => (
                        <Todo 
                            item={item} 
                            index={index} 
                            key={index} 
                            modifyTodoItem={this.props.modifyTodoItem} 
                            deleteTodoItem={this.props.deleteTodoItem}/>
                    ))}
                </ul>
            </div>
        );
    }
    
}

class Todo extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    handleClick = () => {
        this.props.modifyTodoItem(this.props.item,this.props.index)
    }
    deleteItem = () => {
        this.props.deleteTodoItem(this.props.item,this.props.index)
    }

    render(){
        return(
            <li 
                className={`todo_item ${this.props.item.completed ? "todo_completed" : "" }`} 
                key={this.props.item.id} 
                onClick={this.handleClick}>
                    <span className="label">{this.props.item.text}</span>
                    <span className="del" onClick={this.deleteItem}>❌</span>
            </li>
        );
    }
}

export default TodoList;