import React, { useEffect } from 'react';
import DashbordItem from "../components/Dashborditem";
import Navbar from "../components/navbar";
import { useNavigate } from 'react-router-dom';

function Home1() {
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("email") == null) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <h2 className="page-header">Admin Dashboard</h2>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <DashbordItem title='Users' value='100' />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <DashbordItem title='Buses' value='50' />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <DashbordItem title='Bookings' value='120' />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <DashbordItem title='Revenue' value='$500k' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home1;
