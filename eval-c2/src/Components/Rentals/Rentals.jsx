import { useEffect, useState } from "react";
import axios from "axios";
import "./Rentals.css";

export const Rentals = () => {

  const [Allhouse,setAllhouse]=useState([])

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
 






  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
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
                  <img src={house.Image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
