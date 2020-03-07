import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
  <div>
    <h2>This is a Card with name</h2>
    <h3>{ props.name }</h3>
  </div>)
}
export default Card