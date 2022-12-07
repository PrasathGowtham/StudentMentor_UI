import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import myContext from './userContext';
import swal from 'sweetalert';

function EditStudent() {
   let navigate = useNavigate()
   const userContext = useContext(myContext);
   let params = useParams();
   
   useEffect(() => {
         let fetch = async () => {
            try {
                  let fetchStudent = await axios.get(`http://localhost:4000/student/viewone/${params.id}`);
                  formik.setValues(fetchStudent.data)
            } catch (error) {
                  console.log(error);
            }
         }
         fetch();
   }, [])

   const formik = useFormik({
         initialValues: {
            name: "", 
            age: "",
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
                  errors.department="department cannot be blank"
            }
            
            return errors;
         },
          onSubmit: (values) => {
             //   sweet alert to confirm to edit
               swal({
                    title: `Are you sure to edit this student?`,
                    icon: "warning",
                    buttons:{
                         cancel: {
                         text: "Cancel",
                         value: null,
                         visible: true,
                         className: "btn btn-light text-primary",
                         closeModal: true,
                         },
                         confirm: {
                         text: "Edit",
                         value: true,
                         visible: true,
                         className: "btn btn-warning text-dark",
                         closeModal: true
                         }
                    },

                    dangerMode: true,
               })
               .then(async (willEdit) => {
                    if (willEdit) {
          
                        try {
                              await axios.put(`http://localhost:4000/student/edit/${params.id}`, values)
                              // let index = userContext.students.findIndex((obj) => obj.id == params.id);
                              // userContext.students.splice(index, 1, values)
                              // userContext.setStudents([...userContext.students])
                              // formik.resetForm();
                              // navigate("/students")  
                              // swal(`This student has been edited`, {
                              //      icon: "success",
                              //      buttons:{ confirm:{className:"btn btn-primary"}}
                              // })
                        }  catch (error) {
                              console.log(error);
                              navigate("/students")   
                              swal(`This student was not edited due to some technical issues`, 'Please try after some time', {
                                 icon: "info",
                                 buttons:{ confirm:{className:"btn btn-primary"}}
                              })
                           }                         
                    }
               });
          } 
     })
   
   return (
   <div className='container'>
     <div className='h3 mb-2'>Edit a Student</div>
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
                    <input type="text" className={`form-control border border-success`} name="mentor"  onChange={formik.handleChange} value={formik.values.mentor}></input>           
               </div>
               
          </div>
          <div className='m-3 text-center'>
               <button type='submit' className="d-none d-sm-inline-block btn btn-lg btn-success shadow-sm" disabled={Object.keys(formik.errors).length>0? true:false} >Edit</button>
          </div>
          </form>
     </fieldset>
          <button className="d-none d-sm-inline-block btn btn-md btn-primary shadow-sm mt-2" onClick={()=>{navigate("/students")}}>Back</button>        
       
   </div>
  )
}

export default EditStudent