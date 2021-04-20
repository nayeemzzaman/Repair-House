import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import deleteIcon from '../../../images/delete.png'
const ManageService = () => {
    const [serviceData, setService] = useState([]);
    useEffect(() => {
        fetch('https://stormy-lake-37349.herokuapp.com/allService')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data)
            })
    }, [serviceData])
    const buttonStyle = {
        border: 'none',
        backgroundColor: 'white'
    }
    const iconStyle = {
        height: '30px',
        width: '30px'
    }
    const handleDeleteBook=(id)=>{
        console.log("Clicked");
        fetch(`https://stormy-lake-37349.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log("Delete successfully")
        })
    }
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div div className="col-md-10 p-4 pr-5" style={{ position: "absolute",height:'100vh', right: 0, backgroundColor: "#F4FDFB" }}>
            <table className="table table-bserviceless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Service Name</th>
                        <th className="text-secondary" scope="col">Service Price</th>
                        <th className="text-secondary" scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        serviceData.map((service, index) =>

                            <tr>
                                <td>{index + 1}</td>
                                <td>{service.name}</td>
                                <td>{service.price}</td>
                                <td>
                                    <button onClick={()=>handleDeleteBook(`${service._id}`)} style={buttonStyle}><img style={iconStyle} src={deleteIcon} alt="" /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageService;