import logo from './logo.svg';
import './App.css';
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";


function App() {
  return (
    <div className="App">
      <button className="toggleForm">
       <Rentals />
       <AddHouse/>
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
