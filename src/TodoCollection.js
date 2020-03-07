import React from 'react'

const TodoCollection = () => {
  const [ todos,setTodos ] = React.useState([{name:'刷牙',done:false},{name:'遛狗',done:false}])
  const [ newTodo,setNewTodo ] = React.useState()
  const handleAddToDo = () => {
    setTodos([...todos, {name:newTodo,done:false}])
  }
  const handleAddToDoType2 = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  return (
    <>
      <input type='text' onChange={e => setNewTodo(e.currentTarget.value)}></input>
      <button onClick={handleAddToDo}>新增個todo吧</button>
      <button onClick={()=>handleAddToDoType2({name:'睡覺',done:false})}>新增個todo Type2吧</button>
      <ul>
        { todos.map(todo => <li>{todo.name}</li>) }
      </ul>
    </>
  )
}
export default TodoCollection