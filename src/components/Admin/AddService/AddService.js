import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './AddService.css'
const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }
    const onSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('price', info.price);

        fetch('https://stormy-lake-37349.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", height: '100vh', right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand" style={{ fontWeight: '600' }}>Add a Service</h5>
                <form style={{width: '50%'}} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Service Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Service Price</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file" class="custom-file-upload">
                            <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faUpload} />Upload a image</label>
                        <input onChange={handleFileChange} type="file" id="file" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn-style">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;