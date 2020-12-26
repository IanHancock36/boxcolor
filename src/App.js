import  {Component } from "react";
import './App.css';
import Box from './Box';


function App() {
  return (
    <div className="App">
      <Box height={10} width ={20} color ="purple" /> 
      <Box height={20} width ={10} color ="teal"/> 


    
    </div>
  );
}

export default App;
