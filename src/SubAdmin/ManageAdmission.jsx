import React, { useState } from "react";
import { FiPackage, FiUser, FiCalendar } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";

const dummyOrders = [
    {
        id: 1,
        userName: "John Doe",
        date: "2025-03-29T14:30:00Z",
        total: 1500,
        items: [
            { name: "Product A", qty: 2, price: 500, image: "https://via.placeholder.com/150" },
            { name: "Product B", qty: 1, price: 500, image: "https://via.placeholder.com/150" },
        ],
        address: { Address: "123 Main Street, City, Country" },
        paymentMethod: "Credit Card",
    },
    {
        id: 2,
        userName: "Jane Smith",
        date: "2025-03-28T10:00:00Z",
        total: 2200,
        items: [
            { name: "Product C", qty: 3, price: 700, image: "https://via.placeholder.com/150" },
        ],
        address: { Address: "456 Elm Street, Town, Country" },
        paymentMethod: "PayPal",
    },
];

const ManageOrders = () => {
    const [expandedOrder, setExpandedOrder] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return {
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
    };

    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Manage Orders</h1>

            <div className="row">
                {dummyOrders.map((order) => {
                    const { date, time } = formatDate(order.date);
                    const isExpanded = expandedOrder === order.id;

                    return (
                        <div key={order.id} className="col-md-12 mb-4">
                            <div className={`card ${isExpanded ? "border-primary shadow" : ""}`}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h6><FiPackage className="text-warning me-2" />Order ID</h6>
                                            <p>#{order.id}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <h6><FiUser className="text-warning me-2" />Customer</h6>
                                            <p>{order.userName}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <h6><FiCalendar className="text-warning me-2" />Order Date</h6>
                                            <p>{date}</p>
                                            <p className="text-muted">{time}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <h6><MdCurrencyRupee className="text-warning me-2" />Total</h6>
                                            <p className="fw-bold">₹{order.total}</p>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mt-3 pt-3 border-top">
                                        <button
                                            onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                                            className="btn btn-warning"
                                        >
                                            {isExpanded ? "Hide Details" : "View Details"}
                                        </button>
                                    </div>
                                </div>

                                {isExpanded && (
                                    <div className="card-footer bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h6>Order Items</h6>
                                                {order.items.map((item, index) => (
                                                    <div key={index} className="d-flex align-items-center border-bottom py-2">
                                                        <img src={item.image} alt={item.name} className="rounded me-3" width="60" />
                                                        <div>
                                                            <p className="mb-0 fw-bold">{item.name}</p>
                                                            <p className="mb-0 text-muted">
                                                                Qty: {item.qty} × ₹{item.price}
                                                            </p>
                                                            <p className="fw-bold">Subtotal: ₹{item.qty * item.price}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="col-md-6">
                                                <h6>Shipping Address</h6>
                                                <p className="border p-2">{order.address.Address}</p>

                                                <h6>Payment Details</h6>
                                                <p className="mb-0">Method: {order.paymentMethod}</p>
                                                <p className="fw-bold">Total Paid: ₹{order.total}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ManageOrders;
