import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const TodoCollection = () => {
  const [ todos,setTodos ] = React.useState([])
  const [ newTodo,setNewTodo ] = React.useState('')
  const handleChange = (e) => {
    setNewTodo(e.currentTarget.value)
  }
  React.useEffect(() => {
    let todosFromStorage = JSON.parse(localStorage.getItem("todos"));
    setTodos(todosFromStorage)
  },[])
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])
  const handleSubmit = (e) => {
    e.preventDefault()
    if(newTodo !== ''){
      setTodos([...todos, {id:uuidv4(),name:newTodo, done:false}])
      setNewTodo('')
    }
  }
  const handleDelete = (id) => {
    const filterTodos = todos.filter((todo) =>todo.id !== id)
    setTodos(filterTodos)
  }
  const handleToggleFinish  = (id) =>{
    const filterTodos = todos.map((todo) => todo.id === id ? { ...todo, done:!todo.done} : todo)
    setTodos(filterTodos)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={newTodo}></input>
      <button type='submit'>新增個todo</button>
    </form>

    <ul>
        { todos.map(todo => (
          <li key={todo.id}>
            <h3> {todo.name}</h3>
            <span>todo id: {todo.id}</span>
            <h6> todo is finished or not? <mark>{todo.done? 'yes' : 'no'}</mark></h6>
            <button onClick={() =>handleDelete(todo.id)}>delete Todo</button>
            <button onClick={() =>handleToggleFinish(todo.id)}>finish Todo</button>
          </li>
        )
        ) }
    </ul>
    </>
  )
}
export default TodoCollection
