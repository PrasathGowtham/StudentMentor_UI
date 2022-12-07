import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import swal from 'sweetalert'
import myContext from './userContext';
import { Link, useNavigate } from 'react-router-dom';

function AddStudent() {
   let navigate = useNavigate()
   const userContext = useContext(myContext);
   const formik = useFormik({
         initialValues: {
            name: "", 
            age:"",
            department: "",
            mentor: "",
         },
         validate: (values) => {
            const errors = {};

            if (!values.name) {
                  errors.name="Name cannot be blank"
            }
            if (!values.age || values.age==0) {
                  errors.age="Age cannot be blank"
            }
            if (!values.department) {
                  errors.department="Department cannot be blank"
            }    if (!values.mentor) {
               errors.mentor="Mentor cannot be blank"
         }           
            return errors;
         },
         onSubmit: async (values) => {               
            try {
               await axios.post("http://localhost:4000/student/add", values);
               userContext.setStudents([...userContext.students, values])
               formik.resetForm();
               navigate(()=>"/students");
               swal({
                  title: `student - ${values.name}`,
                  text: "Succefully Added",
                  icon: "success",
                  buttons:{ confirm:{className:"btn btn-primary"}}
               })
            } catch (error) {
                  console.log(error);
                  navigate("/students")   
                  swal(`This student was not added due to some technical issues`, 'Please try after some time', {
                     icon: "info",
                     buttons:{ confirm:{className:"btn btn-primary"}}
                  })
            }     
         }
   })
  return (
   <div className='container'>
     <div className='h3 mb-2'>Add a Student</div>
     <fieldset className='border border-5 border-primary p-3'>
          <form onSubmit={formik.handleSubmit} id="form">
          <div className='row'>
               
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Name</label><span className='text-danger'>*</span>
                    <input className={`form-control border border-${formik.errors.name?"danger":"success"}`} name="name" onChange={formik.handleChange} value={formik.values.name}></input>
                    <span className='text-danger'>{formik.errors.name}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Age</label><span className='text-danger'> *</span>
                    <input type="number" className={`form-control border border-${formik.errors.age?"danger":"success"}`} name="age" onChange={formik.handleChange} value={formik.values.age}></input>
                    <span className='text-danger'>{formik.errors.age}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Department</label><span className='text-danger'> *</span>
                    <input type={"text"} className={`form-control border border-${formik.errors.department?"danger":"success"}`} name="department" onChange={formik.handleChange} value={formik.values.department}></input>
                    <span className='text-danger'>{formik.errors.department}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark fw-bold'>Mentor</label>
                    <input type="text" className={`form-control border border-success`} name="mentor" onChange={formik.handleChange} value={formik.values.mentor}></input>           
               </div>
                           
          </div>
          <div className='m-3 text-center'>
               <button type='submit' className="d-none d-sm-inline-block btn btn-lg btn-success shadow-sm" disabled={Object.keys(formik.errors).length>0? true:false} >Add</button>
          </div>
          </form>
     </fieldset>
          <button className="d-none d-sm-inline-block btn btn-md btn-primary shadow-sm mt-2" onClick={()=>{navigate("/students")}}>Back</button>        
       
   </div>
  )
}

export default AddStudent