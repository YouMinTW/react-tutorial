import React from 'react'
const Title = ({title}) => {
  React.useEffect(() => {
      const timer = setInterval(() => console.log(title), 1000)
      return () => clearInterval(timer)
  }, [])
  return <div>{title}</div>
}

export default Title

export const Title1 = ({title}) => {
  React.useEffect(() => {
      const timer = setInterval(() => console.log(title), 1000) 
      return () => clearInterval(timer)
  }, [title])
  return <div>{title}</div>
}
