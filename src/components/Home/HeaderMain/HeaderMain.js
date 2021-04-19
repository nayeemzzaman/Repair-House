import React from 'react';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center justify-content-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'white', fontSize:'40px', fontWeight:'700'}}>Quick Mobile Help for<br/> All Kind of Phones</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore incidunt perferendis sapiente fuga esse quidem numquam consectetur eaque.</p>
                <button style={{background: 'orange', border: 'none', width:'150px'}} className="btn btn-primary">Send</button>
            </div>
            <div className="col-md-6">
                
            </div>
        </main>
    );
};

export default HeaderMain;