import React from 'react';
import iphone from '../../../images/iphone.png';
import samsung from '../../../images/samsung-galaxy.png';
import nokia from '../../../images/samsung.png';
import blackberry from '../../../images/blackberry.png';
import huawei from '../../../images/Huawei.png';
import Phone from '../Phone/Phone';

const FeaturedPhone = () => {
    const phoneData = [
        {name: 'Iphone', image:iphone},
        {name: 'Samsung', image:samsung},
        {name: 'Nokia', image:nokia},
        {name: 'Huawei', image:huawei}
    ]
    return (
        <section >
            <div >
                <div className="text-center mt-5">
                    <h1 className="text-brand"style={{fontWeight:'700'}}>Smartphone that We Work With</h1>
                    <p style={{color: 'lightgray'}}>Lorem ipsum dolor sit amet consectetur adipisicing.<br/>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className ="container row mt-4 mx-auto">
                    {
                        phoneData.map(phone => <Phone phoneData={phone}></Phone>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedPhone;