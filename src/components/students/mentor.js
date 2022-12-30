import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Mentor() {
  let navigate = useNavigate()
   
   
   
   return (
      <>

      <div className='col-md-8' style={{paddingLeft:"20px"}}>
      <h2 style={{padding:" 22px ",fontFamily:"sans-serif"}}><i>  MENTOR TABLE</i></h2>
   <table class="table">
  <thead>
    <tr>
    <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Experience</th>
    </tr>
  </thead>
  

   <tbody >
      <tr>
      <td>1</td>
      <td>Suresh</td>
      <td>Biology</td>
      <td>12</td>
    </tr>
  </tbody>
  <tbody >
      <tr>
      <td>2</td>
      <td>Ram</td>
      <td>Coumputer Science</td>
      <td>10</td>
    </tr>
  </tbody>
  <tbody >
      <tr>
      <td>3</td>
      <td>Gowtham</td>
      <td>Economics</td>
      <td>15</td>
    </tr>
  </tbody>
</table>

         <button className="d-none d-sm-inline-block btn btn-md btn-primary shadow-sm mt-2" onClick={()=>{navigate("/students")}}>Back</button>
      </div>
      </>
  )
}

export default Mentor