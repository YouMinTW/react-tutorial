import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const TodoCollection = () => {
  const [ todos,setTodos ] = React.useState([])
  const [ newTodo,setNewTodo ] = React.useState('')
  const [ updateTodo,setUpdateTodo ] = React.useState({edit:false})
  const [ restTodos,setRestTodos ] = React.useState([])
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
    if(newTodo !== '' && updateTodo.edit ===false) {
      setTodos([...todos, {id:uuidv4(),name:newTodo, done:false, edit:false}])
    } else if (updateTodo.edit ===true) {
      setTodos([...restTodos, {id:updateTodo.id,name:newTodo, done:updateTodo.done, edit:false}])
    }
    setNewTodo('')
    setUpdateTodo({edit:false})
  }
  const handleDelete = (id) => {
    const filterTodos = todos.filter((todo) =>todo.id !== id)
    setTodos(filterTodos)
    setNewTodo('')
    setRestTodos([])
    setUpdateTodo({edit:false})
  }
  const handleToggleFinish  = (id) =>{
    const filterTodos = todos.map((todo) => todo.id === id ? { ...todo, done:!todo.done} : todo)
    setTodos(filterTodos)
    setNewTodo('')
    setRestTodos([])
    setUpdateTodo({edit:false})
  }
  const handleEdit  = (id) =>{
    const selectedTodo = todos.find((todo) => todo.id === id)
    const filterTodos = todos.filter((todo) => todo.id !== id)
    setRestTodos(filterTodos)
    setUpdateTodo({ ...selectedTodo, edit:true})
    setNewTodo(selectedTodo.name)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={newTodo}></input>
      <button type='submit'>{updateTodo.edit ? '編輯todos':'新增個todo'}</button>
    </form>

    <ul>
        { todos && todos.map(todo => (
          <li key={todo.id}>
            <h3> {todo.name}</h3>
            <span>todo id: {todo.id}</span>
            <h6> todo is finished or not? <mark>{todo.done? 'yes' : 'no'}</mark></h6>
            <h6> todo edit? <mark>{todo.edit? 'yes' : 'no'}</mark></h6>
            <button onClick={() =>handleDelete(todo.id)}>delete Todo</button>
            <button onClick={() =>handleToggleFinish(todo.id)}>finish Todo</button>
            <button onClick={() =>handleEdit(todo.id)}>edit Todo</button>
          </li>
        )
        ) }
    </ul>
    </>
  )
}
export default TodoCollection
