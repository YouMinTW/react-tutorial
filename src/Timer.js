import React from 'react'

export const Timer1 = () => {
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
      const timer = setInterval(() => {
        console.log(count + 1)
        setCount(count + 1)
      }, 1000)
      return () => clearInterval(timer)
  }, [count])
  return <div>{count}</div>
}
export const Timer2 = () => {
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
      const timer = setInterval(() => {
        console.log(count + 1)
        setCount(count + 1)
      }, 1000)
      return () => clearInterval(timer)
  }, [])
  return <div>{count}</div>
}