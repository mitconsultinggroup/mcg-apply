import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Header from '../components/headers/Header';
import FeedbackForm from '../components/forms/feedbackForm';
import MemberHeader from '../components/headers/MemberHeader';

export default function Events() {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState({ firstname: "" });

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/me").then(
            (response) => {
                if (response.ok) {
                    response.json().then(data => {
                        setUserData(data.data);
                        console.log(userData)
                        setIsLoading(false);
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
                <MemberHeader firstname={userData.firstname} />
            </div>
            <FeedbackForm/>
        </div>
    )
}