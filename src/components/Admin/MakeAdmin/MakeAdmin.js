import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data=> {
        
        fetch('https://stormy-lake-37349.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: data.email})
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Added successfully.')
                }
            })
    }
    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute",height:'100vh', right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Admin</h5>
                <form className="order-form" style={{ width: '35%' }} onSubmit={handleSubmit(onSubmit)}>
                    < input name="email" placeholder="Enter Email" ref={register({ required: true })}  />
                    {errors.email && <span className="error">Email is required</span>}
                    <input className="btn-brand" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;