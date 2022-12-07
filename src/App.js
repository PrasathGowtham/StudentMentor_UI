import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyProvider } from './components/userContext.js';
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Students from './components/students/Students.jsx';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  return (
    <BrowserRouter>
      <MyProvider value={{mentors,setMentors,students,setStudents}}>
        <div className="d-flex">
          <Sidebar className=""/>
          <Routes >
            <Route path="/students" element={<Students />}/>
            <Route path="/add-student" element={<AddStudent />}/>
            <Route path="/edit-student/:id" element={<EditStudent />}/>
            <Route path="/" element={<ViewStudent />}/>
            {/* <Route path="mentors" element={<Mentors />} /> */}
          </Routes>
        </div>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;