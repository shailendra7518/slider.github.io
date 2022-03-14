import { useState ,useRef} from "react";
import axios from "axios";
export const AddHouse = () => {

const [HouseData,setHouseData]=useState([{}])

const [house,sethouse]=useState({
     name:"",
     ownerName:"",
     address:"",
     areaCode:"",
     rent:"",
     bachelor:"bachlor",
     married:"",
     image:""


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
  name:"",
  ownerName:"",
  address:"",
  areaCode:"",
  rent:"",
  bachelor:"",
  married:"",
  image:""

})



}







  return (
    <div className="addHouseContainer">
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <input type="text" id="name" className="name" value={house.Name} onChange={handlechange} required />
        <br />
        <label>ownerName</label>
        <input value={house.ownerName} id="ownerName" type="text" className="ownerName" onChange={handlechange} required />
        <br />
        <label>address</label>
        <input value={house.address} id="address" type="textarea" className="address" onChange={handlechange} required />
        <br />
        <label>areaCode</label>
        <input value={house.areaCode} id="areaCode" type="number" className="areaCode" onChange={handlechange} required />
        <br />
        <label>rent</label>
        <input value={house.rent} id="rent" type="number" className="rent" onChange={handlechange} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  id="bachelor" type="checkbox" className="bachelor" onChange={handlechange} />
        <br />
        <label>married</label>
        <input  id="married" type="checkbox" className="married" onChange={handlechange}/>
        <br />
        <label>image</label>
        <input value={house.image} id="image" type="text" className="image" required onChange={handlechange}/>
        <br />
        <input className="submitBtn" type="submit"  />
      </form>
    </div>
  );
};
