import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import myContext from './userContext';
import { Link } from 'react-router-dom';
function ViewStudent() {
  let navigate = useNavigate()
   const userContext = useContext(myContext);
   let params = useParams();
   let [stud,setStud] = useState([])
   // let index = userContext.students.findIndex((e)=> e._id == params.id)
   useEffect(() => {
      let fetch = async () => {
         try {
            let student = await axios.get(`https://student-f583.onrender.com/student/view`)
            setStud(student.data)
         } catch (error) {
            console.log(error);    
         }  
      }
      fetch();   
   },[])
   
   return (
      <>

      <div className='col-md-8' style={{paddingLeft:"20px"}}>
      <h2 style={{paddingLeft:"250px",fontFamily:"sans-serif"}}>STUDENT MENTOR TABLE</h2>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Department</th>
      <th scope="col">Mentor</th>
    </tr>
  </thead>
  
 { stud.map((p,i)=> 
   <tbody key={i}>
      <tr>
      <td>{i+1}</td>
      <td>{p.name}</td>
      <td>{p.age}</td>
      <td>{p.department}</td>
      <td>{p.mentor}</td>
    </tr>
   
  </tbody>)}
</table>

         <button className="d-none d-sm-inline-block btn btn-md btn-primary shadow-sm mt-2" onClick={()=>{navigate("/students")}}>Back</button>
      </div>
      </>
  )
}

export default ViewStudent
