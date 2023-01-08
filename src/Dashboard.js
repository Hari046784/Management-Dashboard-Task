import axios from 'axios';
import React, { useEffect, useState } from 'react'
import loadings from './loading.svg'

function DashBoard() {
  let [mentor,setMentor] = useState([]);
  let [student,setStudent] = useState([]);
  const [dsloding,setdsloding] = useState(false);
  const [dmloding,setdmloding] = useState(false);
  const [studentLoading,setStudentLoading] = useState(false);
  const [mentorLoading,setMentorLoading] = useState(false);

  useEffect(() => {
    loadingMentor();
    loadingStudent();
  }, []);
  
  // get mentor data from mock api
  const loadingMentor = async () => {
    setMentorLoading(true)
    try {
      let value = await axios.get('https://63b688da58084a7af3b4fc1d.mockapi.io/mentors');
      setMentor(value.data);
        if(value.status===200){
          setMentorLoading(false)
        }
    }
     catch (error) {
      console.log(error);
    }
  }

  // get student data from mock api
  const loadingStudent = async () => {
    setStudentLoading(true)
    try {
      let value = await axios.get('https://63b688da58084a7af3b4fc1d.mockapi.io/students');
      setStudent(value.data);
      if(value.status===200){
        setStudentLoading(false)
      }
    }
    catch (err) {
       console.log("Error:", err);
    }
  };

  // student delete data from mock api
  async function studentDelete(id) {
    setdsloding(true)
   try {
      await axios.delete(`https://63b688da58084a7af3b4fc1d.mockapi.io/students/${id}`)
       setdsloding(false)
       loadingMentor();
       loadingStudent();
    }
    catch (err) {
       console.log("Error:", err);
    }
  };
          
 // mentor detete data from mock api
  async function mentorDelete(id) {
    setdmloding(true)
  try{
      await axios.delete(`https://63b688da58084a7af3b4fc1d.mockapi.io/mentors/${id}`)
        setdmloding(false)
        loadingStudent();
        loadingMentor();
    }
    catch (err) {
      console.log("Error:", err);
    }
  };
 
       
  return (
    <>
      <div>
        {/* Display the students infomration */}
          <div>
            <h3 className='p-5'>Student details : -</h3>
            {studentLoading ? <div className='d-flex justify-content-center mb-5'><img src={loadings} alt="load" style={{width:"3rem",paddingLeft:"10px"}} /></div>: 

              <table className="table w-50 mx-auto">    
                <thead>
                  <tr>
                    <th scope="col">SI.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col"> Edit Option</th>
                    <th scope="col"> Delete Option</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    student.map((item,index)=>{
                      return ( 
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td> <button  className="btn">Edit</button></td>
                          <td> <button onClick={()=>{studentDelete(item.id)}} className="btn">Delete</button></td>
                          <td>{dsloding ? <img src={loadings} alt="load" style={{width:"3rem",paddingLeft:"10px"}} />: null }</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            }
          </div>

        {/* Display mentor details */}
          <div>
            <h3 className='p-5'>Mentor details : -</h3>
        
            {mentorLoading ? <div className='d-flex justify-content-center mb-5'><img src={loadings} alt="load" style={{width:"3rem",paddingLeft:"10px"}} /></div>: 
              <table className="table w-50 mx-auto">
                <thead>
                  <tr>
                    <th scope="col">SI.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col"> Edit Option</th>
                    <th scope="col"> Delete Option</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    mentor.map((item,index)=>{
                      return(
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td> <button  className="btn">Edit</button></td>
                          <td> <button onClick={()=>mentorDelete(item.id)} className="btn">Delete</button></td>
                          <td>{dmloding ? <img src={loadings} alt="load" style={{width:"3rem",paddingLeft:"10px"}} />: null }</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            }
          </div>
      </div>
    </>
  )
}

export default DashBoard;