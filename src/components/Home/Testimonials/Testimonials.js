import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import { useState } from 'react';
import { useEffect } from 'react';



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( ()=>{
        fetch('https://stormy-lake-37349.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReviews(data)
        })
    }, [])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h1 className="text-brand"style={{fontWeight:'700'}}>Testimonials form Our Clients</h1>
                   <p style={{color: 'lightgray'}}>Lorem ipsum dolor sit amet consectetur<br/>Lorem ipsum dolor sit amet.</p>
               </div>
               <div className="row mt-5">
                    {
                        reviews.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;