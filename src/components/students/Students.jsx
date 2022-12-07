import React, { useContext, useEffect } from 'react';
import myContext from '../userContext';
import axios from 'axios'; 
import { Link } from 'react-router-dom'
import Row_students from './Row_students';

let userContext;
async function fetch() {
    try {
      let datas = await axios.get("http://localhost:4000/student/view")
      userContext.setStudents(datas.data)
      
    } catch (error) {
      console.log(error);
    }
  }
  
  function Students() {
  userContext = useContext(myContext) 

    useEffect(() => {
        fetch();
  },[])

  return (
    <div className='flex-fill p-3 pt-4' style={{height:"100vh",overflow:"scroll" }}>
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800" style={{fontFamily:"sans-serif"}}>Students List</h1>
        
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3 d-sm-flex align-items-center justify-content-between mb-4">
                <h6 className="m-0 font-weight-bold text-primary">List of Students</h6>
                <Link to="/add-student" className="d-none d-sm-inline-block btn btn-md btn-success shadow-sm">Add a Student</Link>
            </div>
            <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Department</th>
                                <th>Mentor</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              userContext.students.map((obj,i) => {
                                return <Row_students data={obj} num={i}/>
                              })     
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Students
export {fetch}