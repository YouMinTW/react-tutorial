import React from 'react';
import nameAnythingYouWant,{ sayNiHou as Nihou } from './sayHi.js'

// 某個會被儲存在Global變數isJohn
var isJohn = true
if(isJohn) {
  var nameIsJohn = 'John'
}
function Card4() {
  return <div>{nameIsJohn}</div> 
}

// 嘗試著解除下面這幾行程式碼的註解
// Card4 = () => {
//   if(isJohn === true)
//   {
//     nameIsJohn = 'Tom'
//   }
//   return <div>{nameIsJohn}</div>
// }

function App() {
  // nameAnythingYouWant他會直接指向有default的function
  nameAnythingYouWant()
  // 原本沒default的export出去之後，要引入需要{}，而透過 as 之後可以取別名
  Nihou()
  return (
    <div className="App">
      <Card/>
      <Card2/>
      <Card3 name={'Ken'}/>
      <Card3 name={'KK'}/>
      <Card4 />
    </div>
  );
}

function Card () {
  return <div>123</div>
}
const Card2 = () => <div>Card2</div>
const Card3 = ({name}) => <div>{`My name is ${name}`}</div>
export default App;
