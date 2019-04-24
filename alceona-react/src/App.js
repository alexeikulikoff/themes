import React from 'react';

import Button from './components/Button';

import './App.css';

var click1 = function(){
    console.log('click me');
}
function App() {
  return (
    <div>
      <Button caption="Apply112" onClick = {click1} icon="address-card" type="shutdown"/>
      <p>Hello </p> 
     </div>
  );
}

export default App;
