import React from 'react'

const TodoCollection = () => {
  const [ todos,setTodos ] = React.useState([{name:'刷牙',done:false},{name:'遛狗',done:false}])
  const [ newTodo,setNewTodo ] = React.useState('')
  const handleChange = (e) => {
    setNewTodo(e.currentTarget.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(newTodo !== ''){
      setTodos([...todos, {name:newTodo, done:false}])
      setNewTodo('')
    }
  }
  const handleDelete = (name) =>{
    const filterTodos = todos.filter((todo) =>todo.name !== name)
    setTodos(filterTodos)
  }
  const handleToggleFinish  = (name) =>{
    const filterTodos = todos.map((todo) => todo.name === name ? { name:todo.name,done:!todo.done} : todo)
    setTodos(filterTodos)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={newTodo}></input>
      <button onClick={handleSubmit}>新增個todo吧 另一種方式</button>
      <button type='submit'>新增個todo</button>
    </form>

    <ul>
        { todos.map(todo => (
          <div key={todo.name}>
            <li> {todo.name}</li>
            <button onClick={() =>handleDelete(todo.name)}>delete Todo</button>
            <button onClick={() =>handleToggleFinish(todo.name)}>finish Todo</button>
          </div>
        )
        ) }
    </ul>
    </>
  )
}
export default TodoCollection
