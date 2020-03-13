import React from 'react';
import TodoCollection from './TodoCollection.js';
import Counter from './Counter.js';
import Title,{ Title1 } from './Title'
function App() {
const [title, setTitle] = React.useState('default title')
const handleChange = (e) => {
  setTitle(e.target.value)
}
  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={title}></input>
      <Title title={title}/>
      {/* <Title1 title={title}/> */}
      <Counter />
      <TodoCollection />
    </div>
  );
}

export default App;
