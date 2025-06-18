import React, { useReducer, useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';

import { Todo } from './model';
import TodoList from './components/TodoList';
import { TodoReducer } from './model';
import { Actions } from './model';



const App : React.FC=()=> {

  const [todo, setTodo] = useState<string>("")
  // const [todos, setTodos] = useState<Todo[]>([])
  const [todos, dispatch]= useReducer<React.Reducer<Todo[], Actions>>(TodoReducer, [])

  const handleAdd=(e:React.FormEvent):void=>{
    e.preventDefault()
    if(todo){
      // setTodos([...todos , {id : Date.now(), todo : todo, isDone:false}])
      dispatch({type : "add", payload : todo})
      setTodo("")
    }
    

  }
  console.log(todos)
  return (
    <div className="App">
      <span className='heading'>Task App</span>
      <InputField  todo={todo} setTodo= {setTodo}  handleAdd={handleAdd}/>
      <TodoList todos={todos} dispatch={dispatch}/>
     
    </div>
  );
}

export default App;
