import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Fillters from './components/Fillters';
import Restaurants from './components/Restaurants';
import userInfo from './data/userInfo.json'
import offers from './data/offer.json'
import restaurents from './data/restaurents.json';
import { useState } from 'react';
function App() {
     const [fillterBy,setFillterBy] = useState("");
     const [data,setData] = useState(restaurents);
     const fillter ={
       1:"Cost High to Lost",
       2:"Cost Lost to High",
       3:"Ratings",
       4:"Delivery Time",
       5:"Relevance",
     };
     const updateFillter = (newFillter)=>{
        switch (newFillter){
          case "1":{
            setFillterBy(1);
            let newSortedValues=data.sort((a,b)=> b.costForTwo - a.costForTwo);
             setData(newSortedValues);
             break;    
          }
          case "2":{
            setFillterBy(2);
            let newSortedValues=data.sort((a,b)=> a.costForTwo - b.costForTwo);
             setData(newSortedValues);
             break;    
          }
          default:{
            setData(restaurents);
            break;
          }
        }
     }
  return (
    <div >
    <Navbar {...userInfo.location} /> 
     <Offers offers={offers}/>
     <section className="near-you">
     <Fillters fillter={fillter} currentFillter={fillterBy} updateFillter={updateFillter} />
     <Restaurants restaurents={data}/>
     </section>
    </div>
  );
}

export default App;
