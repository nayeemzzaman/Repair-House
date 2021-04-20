import { Dropdown } from 'react-bootstrap';
import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { useState } from 'react';

const OrderDataTable = ({ orderData }) => {
    const [status, setStatus] = useState({});
    console.log(orderData);
    const [selectedOption, setSelectedOption] = useState("Pending");
    const handleStatus = (event,id) => {
        const status = event.target.name;
        fetch(`https://stormy-lake-37349.herokuapp.com/update/${id}`,{
            method : 'PATCH',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({status}),
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                console.log("Updated Successfully")
            }
        })
    }

    const options = [
        "Pending", "Done", "Ongoing"
    ]
    const buttonStyle= {
        
    }
    
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderData.map((order, index) =>

                        <tr>
                            <td>{index + 1}</td>
                            <td>{order?.Order.name}</td>
                            <td>{order?.Order.email}</td>
                            <td>{order?.Order.serviceName}</td>
                            <td>
                                <button onClick={(event)=>handleStatus(event, order._id)} name='pending' style={{border: 'none',borderRadius: '3px',backgroundColor: 'Red',color:'white'}}>Pending</button>
                                <button onClick={(event)=>handleStatus(event, order._id)} name='done' style={{border: 'none',borderRadius: '3px',backgroundColor: 'Green',color:'white'}}>Done</button>
                                <button onClick={(event)=>handleStatus(event, order._id)} name='ongoing' style={{border: 'none',borderRadius: '3px',backgroundColor: 'Yellow',color:'Black'}}>Ongoing</button>
                                {/* <select
                                    
                                    value={selectedOption}
                                    onClick={(e) => updateStatus(e.target.value)}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="done">Done</option>
                                    <option value="ongoing">Ongoing</option>
                                </select> */}
                            </td>

                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderDataTable;