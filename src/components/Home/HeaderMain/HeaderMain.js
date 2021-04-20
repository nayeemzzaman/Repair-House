import React from 'react';
import './HeaderMain.css';
const HeaderMain = () => {
    const h1Style={color:'white', fontSize:'40px', fontWeight:'700'};
    const btnStyle={background: 'orange', border: 'none', width:'150px'}
    return (
        <main style={{height:'600px', width:'100%'}} className=" row d-flex align-items-center justify-content-center">
            <div className="col-md-4  header-desk offset-md-1 ">
                <h1 style={h1Style}>Quick Mobile Help for<br/> All Kind of Phones</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore incidunt perferendis sapiente fuga esse quidem numquam consectetur eaque.</p>
                <button style={btnStyle} className="btn btn-primary headerBtn">Send</button>
            </div>
            <div className="col-md-6">
                
            </div>
        </main>
    );
};

export default HeaderMain;