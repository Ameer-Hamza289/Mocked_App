import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch("/api/all-users")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"data");
      setUsers(data)})
    .catch((err)=>console.error(err));
  },[])

  console.log(users);
  return (
    <div style={{ display:"flex", flexWrap:"wrap", gap:"20px"}}>
      {users.length>0?
      users.map((user)=>(
        <div style={{ backgroundColor:"grey", padding:"20px", borderRadius:"15px", color:"white"}} key={user._id}>
          <p><strong>Name : </strong>{user.name}</p>
          <p><strong>Email : </strong>{user.email}</p>
          <p><strong>Phone : </strong>{user.phone}</p>
        </div>
      ))
      :
      <p>No user found</p>
    }
    </div>
  )
}

export default App
