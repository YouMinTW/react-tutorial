import React from 'react';
import Card from './Card'
// 來寫個從外部引進的元件吧!
// 再來寫個含有 h2 (how're you), a (let's google導去google)的元件吧

function App() {
  return (
    <div className="App">
      <Card name='ken'></Card>
      <Card name='Mayu'></Card>
    </div>
  );
}

export default App;
