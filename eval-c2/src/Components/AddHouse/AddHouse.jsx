import { useState ,useRef} from "react";
import axios from "axios";
export const AddHouse = () => {

const [HouseData,setHouseData]=useState([{}])

const [house,sethouse]=useState({
     Name:"",
     OwnerName:"",
     Address:"",
     AreaCode:"",
     Rent:"",
     Bachelor:"bachlor",
     Married:"",
     Image:""


})


const handlechange=(e)=>{
const {id,value}= e.target


sethouse({...house,[id]:value})


}

const handlesubmit=(e)=>{
  e.preventDefault()

  axios.post('http://localhost:8080/houses',house)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

setHouseData([...HouseData,house])

 
sethouse({
  Name:"",
  OwnerName:"",
  Address:"",
  AreaCode:"",
  Rent:"",
  Bachelor:"",
  Married:"",
  Image:""

})



}







  return (
    <div className="addHouseContainer">
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <input type="text" id="Name" className="name" value={house.Name} onChange={handlechange} required />
        <br />
        <label>ownerName</label>
        <input value={house.OwnerName} id="OwnerName" type="text" className="ownerName" onChange={handlechange} required />
        <br />
        <label>address</label>
        <input value={house.Address} id="Address" type="text" className="address" onChange={handlechange} required />
        <br />
        <label>areaCode</label>
        <input value={house.AreaCode} id="AreaCode" type="number" className="areaCode" onChange={handlechange} required />
        <br />
        <label>rent</label>
        <input value={house.Rent} id="Rent" type="number" className="rent" onChange={handlechange} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  id="Bachelor" type="checkbox" className="bachelor" onChange={handlechange} />
        <br />
        <label>married</label>
        <input  id="Married" type="checkbox" className="married" onChange={handlechange}/>
        <br />
        <label>image</label>
        <input value={house.Image} id="Image" type="text" className="image" required onChange={handlechange}/>
        <br />
        <input className="submitBtn" type="submit"  />
      </form>
    </div>
  );
};
