import React, { useContext } from 'react'
import swal from 'sweetalert';
import myContext from '../userContext';
import axios from 'axios'; 
import viewIcon from './svgIcons/view.svg';
import editIcon from './svgIcons/edit.svg';
import deleteIcon from './svgIcons/delete.svg';
import { Link } from 'react-router-dom';
import { fetch } from './Students';

function Row_students(props) {
       const userContext = useContext(myContext);
  // To handle the delete button of the student
    let handleDelete = async (student) => { 
      swal({
        title: `Are you sure to delete the student ${student.name}?`,
        text: "Once deleted, you will not be able to recover this student data",
        icon: "error",
        buttons:{
          cancel: {
            text: "Cancel",
            value: null,
            visible: true,
            className: "btn btn-light text-primary",
            closeModal: true,
          },
          confirm: {
            text: "Delete",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true
          }
        },
        dangerMode: true,
      })
        .then(async (willDelete) => {
          if (willDelete) {
            console.log(student._id);
            try {
              await axios.delete(`http://localhost:4000/student/delete/${student._id}`)
              let index = userContext.students.findIndex((obj) => obj._id == student._id);
              userContext.students.splice(index, 1);
              userContext.setStudents([...userContext.students]);
              // fetch();
              swal(`Student ${student.name} has been deleted!`, {
                icon: "success",
                buttons:{ confirm:{className:"btn btn-primary"}}
              })
            } catch (error) {
              swal(`Student ${student.name} has not been deleted due to some technical issues`,'Please try after some time', {
                icon: "info",
                buttons:{ confirm:{className:"btn btn-primary"}}
              })
            }
          }
        });
    }
      
  return (
    <tr className='text-center text-secondary my-font'>
        <td>{props.num+1}</td>
        <td>{props.data.name}</td>
        <td>{props.data.age}</td>
        <td>{props.data.department}</td>
        <td>{props.data.mentor}</td>
        <td className='d-flex'>
          {/* button to View */}
          <Link to={`/view-student/${props.data._id}`}><button className='border border-1 border-primary rounded-pill bg-light m-1'><img src={viewIcon} className='m-1'></img></button></Link>
          {/* button to edit */}
          <Link to={`/edit-student/${props.data._id}`}><button className='border border-1 border-dark rounded-pill bg-light m-1'><img src={editIcon} className='m-1'></img ></button></Link>
          {/* button to delete */}
          <button className='border border-1 border-danger rounded-pill bg-light m-1' onClick={()=>handleDelete(props.data)}><img src={deleteIcon} className='m-1'></img></button>
        </td>
  
    </tr>
  )
}

export default Row_students