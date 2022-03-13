import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function Show({user}) {

  return <div>
        <table>
          <thead>
        <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Deparment</th>
               <th>Salery</th>
               <th>Maritalstate</th>
        </tr>
              
          
          </thead>
          <tbody>
            <tr>
          <td>{user.Name}</td>
          <td>{user.Age}</td>
          <td>{user.Address}</td>
          <td>{user.Department}</td>
          <td>{user.Salery}</td>
          <td>{user.martialstate}</td>
            </tr>
          </tbody>
           </table>
       </div>
     
  


 }