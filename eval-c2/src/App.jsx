import logo from './logo.svg';
import './App.css';
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from 'react';


function App() {
const [house,sethouse]=useState(false)
  function Showhouse(){
if(house==false){
  return  <Rentals />
}else{
  return <AddHouse/>
}

  }

  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>{
        if(house==false){
          sethouse(true)
        }else{
          sethouse(false)
        }
      }} >toggleForm</button>
     
     <Showhouse/>
     
      <br />
    </div>
  );
}

export default App;
