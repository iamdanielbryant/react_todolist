import React from 'react';

import './styles/global.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [{text: "My first task.", completed: false}]
    }

    this.addNewTodo = this.addNewTodo.bind(this)
    this.modifyTodoItem = this.modifyTodoItem.bind(this);
    this.sortList = this.sortList.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
  }

  componentDidMount(){
    if(localStorage.getItem('todos')){
      this.setState({todos: JSON.parse(localStorage.getItem('todos'))})
    }
  }

  addNewTodo(text){
    let updatedList = this.state.todos;
    updatedList.unshift({text: text, completed: false})
    this.setState({todos: updatedList});
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }
  sortList(){
    const oldList = this.state.todos;
    let newList = []
    for (var i = 0; i < oldList.length; i++){
      if (oldList[i].completed === false){
        newList.unshift(oldList[i])
      }
      else{
        newList.push(oldList[i]);
      }
    }
    this.setState({todos: newList});
    localStorage.setItem('todos',JSON.stringify(newList));
  }

  modifyTodoItem(item, index) {
    const updatedTodoItems = this.state.todos;
    let tempTodo = item;
    if (tempTodo.completed === true){
      tempTodo.completed = false;
    }
    else{
      tempTodo.completed = true;
    }
    this.setState({todos: updatedTodoItems})
    this.sortList();
  }

  deleteTodoItem(item, index){
    const updatedTodoItems = this.state.todos;
    updatedTodoItems.splice(index,1);
    this.setState({todos: updatedTodoItems})
    localStorage.setItem('todos',JSON.stringify(updatedTodoItems))
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">Today's Tasks</h1>
          <NewTodo addNewTodo={this.addNewTodo}  />
          <TodoList 
            todoItems={this.state.todos} 
            modifyTodoItem={this.modifyTodoItem} 
            deleteTodoItem={this.deleteTodoItem} />
          <span className="title">Made in Seattle 📌</span>
        </div>
      </div>
    );
  }
  
}

export default App;
