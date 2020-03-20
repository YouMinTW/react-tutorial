import React from 'react'

const NumList = () => {
  const [ numArray, setNumArray] = React.useState([3,5,7,9])
  const handlePushArray = ()=>{
    numArray.push(1)
    console.log(numArray)
  }
  return(
  <div>
    <button onClick={handlePushArray}>Push array</button>
    { numArray.map((num)=><li>{num}</li>) }
  </div>
  )
}
export default NumList