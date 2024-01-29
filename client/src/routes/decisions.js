import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Header from '../components/headers/Header';

export default function Decisions() {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState({ firstname: "" });

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/me").then(
            (response) => {
                if (response.ok) {
                    response.json().then(data => {
                        if (data.data.usertype !== "admin") {
                            navigate("/login")
                        }
                        else {
                            setUserData(data.data);
                            setIsLoading(false);
                        }
                    })
                }
                else {
                    navigate("/login")
                }
            }
        )
    }, [navigate]);
    return (
        isLoading ? <div></div> :
            <div>
                <div>
                    <Header firstname={userData.firstname} usertype={userData.usertype} />
                </div>
                <div className='mx-8 my-8'>
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Decisions Control Panel
                    </h1>
                </div>

            </div>
    )
}