import React from 'react'

const CardWithLink = () => {
  // 如果我不想要div 呢？ 試著刪除外層的div看看
  return (
  <>
    <h2>How're you?</h2>
    <a href="https://www.google.com" target="_blank">Let's go to google!</a>
   </>
  )
}
export default CardWithLink