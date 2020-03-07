import React from 'react'

const OldStyleCardWithLink = () =>{
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      "How're you?"
    ),
    React.createElement(
      'a',
      {href: "https://www.google.com",target:'_blank'},
      ["Let's go to google!"]
    ),
  )
} 

export default OldStyleCardWithLink