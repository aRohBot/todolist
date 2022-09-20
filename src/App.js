import Todo from './components/Todo'
import Form from './components/Form'
import './App.css'
import { useState } from 'react'

function App() {

  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])

  const todoItem ={
    name: todo,
    completed: false
  }

  const submitHandle = e => {
    e.preventDefault()
    console.log(todo)
    if(todo.length === 0){
      return;
    }
    setList([...list, todoItem])
    setTodo('')
  }

  const deleteHandle = (delI) => {
    const filteredList = list.filter((todo, i) => {
      return i !== delI
    })
    setList(filteredList)
  }

  const completeHandle = index =>{
    const updatedList = list.map((todo, i) => {
      if (index === i){
        const updatedTodo = {...todo, completed: !todo.completed}
        return updatedTodo
      }
      return todo
    })
    setList(updatedList)
  }

  return (
    <div className="App">
      <Form todo={todo} setTodo={setTodo} submitHandle={submitHandle} />

    {list.map((todo, i) => {
      return (
      <Todo todo={todo} deleteHandle={deleteHandle} completeHandle={completeHandle} key={i} i={i}/>
      )})}
    </div>
  );
}

export default App;
