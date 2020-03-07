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
      'button',
      null,
      ["Click 我，但是我不會為了你做什麼的!"]
    ),
    React.createElement(
      'a',
      {href: "https://www.google.com",target:'_blank'},
      ["Let's go to google!"]
    ),
  )
} 

export default OldStyleCardWithLink