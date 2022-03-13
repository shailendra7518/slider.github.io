import react from "react"
import axios from "axios"
import { Show } from "./show"
import { useEffect } from "react"
import { useState } from "react"
export function Form({fun}) {
  const [newdata,setnewdata]=useState([])

  const [userData, setUserData] = react.useState({
    Name:"",
    Age: "",
    Address: "",
    Department: "",
    Salery: "",
    martialstate:"unmarried"
   
   
    })
  const handleChange = (e) => {
    let { id, value } = e.target
    if(id=="martialstate"){
    if(value==="on"){
      value="married"
    }
    }
    
    setUserData({...userData, [id]: value })
  }
  
  

  let handleSubmit = (e) => {
   
    e.preventDefault()
    axios.post('https://shailendrae-app.herokuapp.com/data', userData)
    .then(function (response) {

      console.log(response);
      relod()
    })
    .catch(function (error) {
      console.log(error);
    });


    setUserData({
      Name:"",
      Age: "",
      Address: "",
      Department: "",
      Salery: "",
      martialstate:"unmarrid"
     
     })
   
    
  }

// ______________________________________________


function relod(){
  axios.get('https://shailendrae-app.herokuapp.com/data')
  .then(function (response) {
    // handle success
    let user = response.data
    console.log(user)
    setnewdata([...user])
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


}


  useEffect(() => {
  relod()
},[])













  
  return <> <form onSubmit={handleSubmit}>

    <input type="text" placeholder="Name" id="Name" onChange={handleChange} value={userData.Name}/>
    <br />
    <input type="text" placeholder="Age" id="Age" onChange={handleChange} value={userData.Age}/>
    <br />
    <input type="text" placeholder="Address" id="Address" onChange={handleChange} value={userData.Address}/>
    <br />
    <select id="Department" onChange={handleChange}>
    <option value="">Department</option>
    <option value="deweloper">deweloper</option>
    </select>
    <br />
    <input type="text" placeholder="Salery" id="Salery" onChange={handleChange} value={userData.Salery}/>
    <br />
    <label >marital state</label>
    <input type="checkbox" id="martialstate"  onChange={handleChange} />
    <br />
    <input type="submit" />
  </form>

 <div>{newdata.map((ele)=>{
   return < Show user={ele} key={ele.id}/>
 })}</div>



  </>


}