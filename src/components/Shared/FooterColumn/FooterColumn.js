import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import repairIcon from '../../../images/repairIcon2.png'

const FooterColumn = (props) => {
    console.log(props.menuItems);
    return (
        <div className="col-md-3 ">
            {
                props.menuTitle ?
                    <div className=''>
                        <h6 className="text-brand">{props.menuTitle }</h6>
                        <ul className="list-unstyled mt-4">
                            {
                                props.menuItems.map((item, index) => <li key={index}><FontAwesomeIcon style={{fontSize: '13px'}} icon={faChevronRight}></FontAwesomeIcon><Link to={item.link} className="text-secondary ml-2">{item.name}</Link></li>)
                            }
                        </ul>
                    </div>
            :
                <div className="d-flex align-items-center  mb-5">
                    
                    <img style={{ height: '80px', width:'120px', borderRight: '2px solid black'}} src={repairIcon} alt=""/>
                    <h3 className="ml-3"style={{fontWeight:'700'}}><span className="text-brand">REPAIR</span><br/><span style={{color:'rgb(255, 165, 0, 0.8)'}}>HOUSE</span></h3>
                </div>
            }
            {props.children && props.children}
        </div>
    );
};

export default FooterColumn;