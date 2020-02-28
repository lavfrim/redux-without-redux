import React from 'react';
import './App.css';
import One from './components/one';
import { createInfomitter } from './components/infomitter';

const infomitter = createInfomitter();

const store = {
  one: '1',
  two: '2',
  three: '3'
}

infomitter.init(store);

function App() {
  console.log('App render');
  return (
    <div>
      <p>{'App working'}</p>
      <One />
    </div>
  );
}

export default App;
