import React from 'react'

const Counter = () => {
  const [ count, setCount] = React.useState(0)
  return(
  <>
    <h3>{count}</h3>
    <button onClick={()=> setCount(count+1)}>Plus</button>
    <button onClick={()=> setCount(count-1)}>Minus</button>
  </>
  )
}
export default Counter