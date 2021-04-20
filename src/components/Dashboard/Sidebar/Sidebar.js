import { faCalendar, faCartArrowDown, faCog, faCommentAlt, faFileAlt, faGripHorizontal, faHome, faListUl, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://stormy-lake-37349.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {isAdmin ? <div>
                                <li>
                                    <Link to="/allOrderList" className="text-white">
                                        <FontAwesomeIcon icon={faCalendar} /> <span>Order List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/makeAdmin" className="text-white">
                                        <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/addService" className="text-white" >
                                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/manageService" className="text-white" >
                                        <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                                    </Link>
                                </li>
                            </div>
                    :
                    <div>
                        <li>
                            <Link to="/order" className="text-white" >
                                <FontAwesomeIcon icon={faCartArrowDown} /> <span>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orderList" className="text-white" >
                                <FontAwesomeIcon icon={faListUl} /> <span>Order list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" className="text-white" >
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </div>
                    }
            </ul>
                
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;