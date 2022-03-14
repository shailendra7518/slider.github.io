import { useEffect, useState,useRef } from "react";
import axios from "axios";
import "./Rentals.css";

export const Rentals = () => {

  const [Allhouse,setAllhouse]=useState([])
  let flag=useRef(true)
  useEffect(()=>{
    axios.get('http://localhost:8080/houses')
    .then(function (response) {
      // handle success
     
      let houseData=response.data
      setAllhouse([...houseData])
      console.log(Allhouse);
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  },[])
 // sort by id her
function sortbyid(){
  console.log(flag.current)
  if(flag.current){
    flag.current=false
    Allhouse.sort((a,b)=>{
    
      return b.id-a.id
     })
     setAllhouse([...Allhouse])
  }else{
    flag.current=true
    Allhouse.sort((a,b)=>{
    
      return a.id-b.id
     })
     setAllhouse([...Allhouse])
  }
 

}

// sort by price
function RentlowTohigh(){
 
  Allhouse.sort((a,b)=>{
  
    return a.Rent-b.Rent
   })
   setAllhouse([...Allhouse])

}
function RenthighTolow(){
 
  Allhouse.sort((a,b)=>{
  
    return b.Rent-a.Rent
   })
   setAllhouse([...Allhouse])

}


// sort by area 

function ArealowTohigh(){
 
  Allhouse.sort((a,b)=>{
  
    return a.Rent-b.Rent
   })
   setAllhouse([...Allhouse])

}
function AreahighTolow(){
 
  Allhouse.sort((a,b)=>{
  
    return b.Rent-a.Rent
   })
   setAllhouse([...Allhouse])

}

function filterfun(){

}



function searchfun(e){
  let search=e.target.value
  
  if(e.charCode ==13){
    let ans= Allhouse.filter((ele)=>{
   
     if(ele.Address==search){
       return ele
     }

    })
   setAllhouse([...ans])
  }
  


}




  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={sortbyid}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={RentlowTohigh}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={RenthighTolow}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={ArealowTohigh}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={AreahighTolow}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        onKeyPress={searchfun}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {Allhouse.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.Name} </td>
                <td className="ownersName">{house.OwnerName}</td>
                <td className="address">{house.Address}</td>
                <td className="areaCode">{house.AreaCode}</td>
                <td className="rent">{house.Rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src="https://source.unsplash.com/random/60x50?sig=3" alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
