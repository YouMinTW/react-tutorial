import React from 'react'

const TodoCollection = () => {
  const [ todos,setTodos ] = React.useState([{name:'刷牙',done:false},{name:'遛狗',done:false}])
  return (
    <ul>
      { todos.map(todo => <li>{todo.name}</li>) }
    </ul>
  )
}
export default TodoCollection