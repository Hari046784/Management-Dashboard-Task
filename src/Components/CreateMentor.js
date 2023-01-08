import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loadings from '../loading.svg'



function CreateMentor() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        setLoading(true);
        event.preventDefault();

        let data = {
            name,
            email,
            mobile
        }
        console.log("data:",data);

        let value = await axios.post('https://63b688da58084a7af3b4fc1d.mockapi.io/mentors', data);
            console.log("value:",value);
        if(value.status === 201){
            setLoading(false);
            navigate('/');
        };
    };


    return(
        <>
            <div className=' w-50 mx-auto' >

                <form className='w-100 p-5' onSubmit={handleSubmit}>

                    <h1 className='text-center'>Create Mentor</h1>
                    
                    <div className="mb-3">
                        <label for="firstname" className="form-label">Name</label>
                        <input type="text" className="form-control" id="firstname" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </div>

                    <div className="mb-3">
                        <label for="Emailinfo" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="Emailinfo" value={email}  onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>

                    <div className="mb-3">
                        <label for="number" className="form-label">Mobile number</label>
                        <input type="tel" className="form-control" id="number" value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
                    </div>
                    
                    <div className="text-center">
                    <button type="submit" className=".btn">Submit</button>{loading ? <img src={loadings} alt="load" style={{width:"3rem",paddingLeft:"10px"}} />: null} 
                    </div>

                </form>
            </div>
        </>
    );
};

export default CreateMentor;