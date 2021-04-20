import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    console.log(loggedInUser);
    const onSubmit = data => {
        const reviewDetails ={
            ...loggedInUser,
            reviewData: data,
        }
        fetch('https://stormy-lake-37349.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your review posted successfully.')
                    history.push('/home')
                }
            })
    }
    
    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0,height:"100vh", backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Give Your Testimonial</h5>
                <form className="order-form" style={{ width: '35%' }} onSubmit={handleSubmit(onSubmit)}>
                        < input className="mb-4" name="name" placeholder="Your Name" ref={register({ required: true })} />
                        {errors.name && <span className="error">Name is required</span>}
                        
                        < input className="mb-4" name="from" placeholder="Where are you from" ref={register({ required: true })} />
                        {errors.name && <span className="error">Place is required</span>}

                        <textarea name="review" className="form-control" id="" cols="30" rows="10" placeholder="Description *"ref={register({ required: true })}></textarea>
                        
                        <input style={{width:'200px'}} className="btn-brand" type="submit" value="Submit Review"/>
                </form>
            </div>
        </div>
    );
};

export default Review;