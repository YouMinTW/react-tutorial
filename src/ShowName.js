import React from 'react'

const ShowName = () => {
  const [ name, setName] = React.useState('Ken')
  const handleChangeName = ()=>{
    name = 'John'
  }
  const handleChangeNameViaSetName = ()=>{
    setName('Tom')
  }
  return(
  <div>
    <h2>My name is {name}</h2>
    <button onClick={handleChangeName}>Change my name</button>
    <button onClick={handleChangeNameViaSetName}>Change my name(setName)</button>
  </div>
  )
}
export default ShowName