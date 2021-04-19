import React from 'react';
import mechanic from '../../../images/mechanic.jpg'
import './About.css'
const AboutUs = () => {
    return (
        <section id="about" className='aboutUs my-5 pt-5 pb-2'>
            <div className='container'>
                <div className='row mb-5'>
                    <div className="col-md-5  m-md-0">
                        <img className="img-fluid" src={mechanic} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1 style={{ color: '#10386F',fontWeight:'700' }}>About Us</h1>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, veritatis.</p>
                        <p className=" my-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;