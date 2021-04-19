import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import FeaturedPhone from '../FeaturedPhone/FeaturedPhone';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div id='home'>
           <Header></Header>
           <FeaturedPhone></FeaturedPhone>
           <AboutUs></AboutUs>
           <Service></Service>
           <Testimonials></Testimonials>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;