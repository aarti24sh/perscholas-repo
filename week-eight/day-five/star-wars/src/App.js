import React,{useEffect,useState} from 'react';
import { getAllStarships } from './services/sw-api';
import StarShipCard from './Component/StarShipCard';


function App() {
  const[starships,setStarships]=useState([]);

  useEffect(() => {
    const fetchStarships = async () =>{
      const starshipsData = await getAllStarships();
      setStarships(starshipsData);
    };
    fetchStarships();
  },[]);
  return(
    <div className="App">
      <h1>Star Wars starships</h1>
      <div className="card-container">
        {starships.map((starship) =>(
          <StarShipCard Key={starship.name} starship={starship}/>
        ))}
      </div>
    </div>
  
  );
        }
  export default App
    
      
  
