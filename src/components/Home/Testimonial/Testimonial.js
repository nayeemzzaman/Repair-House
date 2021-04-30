import React from 'react';
import './Testimonial.css'
const Testimonial = ({testimonial}) => {
    const {name,email,photo,reviewData,from} = testimonial;
    const imageStyle ={
        width: '60px', 
        borderRadius: '50%',
        
    };

    return (
        <div className="card col-md-4 mb-4 testimonial-style">
            <div className="card-footer d-flex  align-items-center justify-content-center">
                <img style={imageStyle} className="mx-3" src={photo} alt=""/>
                
                <div style={{borderLeft: '2px solid lightgray', paddingLeft: '10px'}}>
                    <h6 className="text-brand">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text ">{reviewData.review}</p>
            </div>
            
       </div>
    );
};

export default Testimonial;