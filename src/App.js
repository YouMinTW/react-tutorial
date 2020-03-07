import React from 'react';

function App() {
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
