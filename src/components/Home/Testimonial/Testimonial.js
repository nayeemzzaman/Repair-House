import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    const imageStyle ={
        width: '60px', 
        borderRadius: '50%',
        
    };

    return (
        <div className="card shadow-sm">
            <div className="card-footer d-flex  align-items-center justify-content-center">
                <img style={imageStyle} className="mx-3" src={img} alt=""/>
                
                <div style={{borderLeft: '2px solid lightgray', paddingLeft: '10px'}}>
                    <h6 className="text-brand">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            
       </div>
    );
};

export default Testimonial;