import React from 'react';
import './App.css';
import Maindiv from './component/Maindiv'

function App() {
  return (
    <body>
    <div className="maindiv">
      <h1 style={{ textAlign: "center" }}>Unit Converter</h1>
      <Maindiv />
    </div>
    </body>
  );
}
export default App;
