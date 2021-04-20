import React from 'react';

const OrderData = ({ orders }) => {
    const order = orders[0]?.Order;
    console.log(order);
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Service Name</th>
                    <th className="text-secondary" scope="col">Service Price</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) =>
                        //console.log(order.Order)
                        <tr>
                            <td>{index + 1}</td>
                            <td>{order?.Order.serviceName}</td>
                            <td>{order?.Order.servicePrice}</td>
                            <td>{order.status}</td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderData;