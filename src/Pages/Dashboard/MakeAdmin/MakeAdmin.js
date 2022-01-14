import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleAdminSubmit = e =>{
        
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method:"PUT",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
        e.preventDefault()
    }
    const handleOnBlur = e =>{
        const field = e.target.value;
        console.log(field);
        setEmail(e.target.value)
       
    }
    return (
        <div>
            <h2>make admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
             label="Email" 
             onBlur={handleOnBlur}
             variant="standard" />
             <Button type='submit' variant='contained'>make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;