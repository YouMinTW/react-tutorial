import React from 'react'

const TodoCollection = () => {
  const [ todos,setTodos ] = React.useState([{name:'刷牙',done:false},{name:'遛狗',done:false}])
  const [ newTodo,setNewTodo ] = React.useState()
  const handleChange = (e) => {
    setNewTodo(e.currentTarget.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, {name:newTodo, done:false}])
    setNewTodo('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={newTodo}></input>
      <button onClick={handleSubmit}>新增個todo吧 另一種方式</button>
      <button type='submit'>新增個todo</button>
      <ul>
        { todos.map(todo => <li>{todo.name}</li>) }
      </ul>
    </form>
  )
}
export default TodoCollection
