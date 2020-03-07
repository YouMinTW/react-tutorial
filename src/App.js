import React from 'react';
import nameAnythingYouWant,{ sayNiHou as Nihou } from './sayHi.js'
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
    </div>
  );
}

function Card () {
  return <div>123</div>
}
const Card2 = () => <div>Card2</div>
const Card3 = ({name}) => <div>{`My name is ${name}`}</div>
export default App;
