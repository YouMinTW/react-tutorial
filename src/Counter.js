import React from 'react'

const Counter = () => {
  const [ count, setCount] = React.useState(0)
  React.useEffect(() => {
    document.title = `You clicked ${count} times`
    return () => {
      
    };
  }, [count])
  return(
  <>
    <h3>{count}</h3>
    <button onClick={()=> setCount(count+1)}>Plus++</button>
    <button onClick={()=> setCount(count-1)}>Minus--</button>
  </>
  )
}
export default Counter