import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/navbar";
import DashboardItem from '../components/DashboardItem';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem("email")) {
            navigate("/login");
        }
    }, [navigate]);

    const stats = [
        { title: 'Users', value: '100', icon: '👤' },
        { title: 'Buses', value: '50', icon: '🚌' },
        { title: 'Bookings', value: '120', icon: '📅' },
        { title: 'Revenue', value: '$500k', icon: '💰' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <Navbar />
            <div className="container mx-auto p-8">
                <h2 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <DashboardItem 
                            key={index} 
                            title={stat.title} 
                            value={stat.value} 
                            icon={stat.icon} 
                            className="bg-white p-6 rounded-xl shadow-lg text-gray-800 hover:scale-105 transition-transform duration-300"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;