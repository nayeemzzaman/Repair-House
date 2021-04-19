import React from 'react';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="row">
                <div className="col-sm-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-sm-10">
                    <OrderList></OrderList>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;