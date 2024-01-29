import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLoaderData, useParams } from 'react-router-dom'

import Header from '../components/headers/Header';
import ProfileForm from '../components/forms/ProfileForm';

export default function Profile() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [user, setUserData] = useState({ firstname: "" });
    const [pnmData,setPNMData] = useState([]);
    const {userid} = useParams(); 
    const [application, setApp] = useState([])

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
        );

        fetch(`api/admin/candidate-info/${userid}`).then((response) => {
            if (response.ok) {
                response.json().then((data)=>{
                    if (data.candidate.userData.application) {
                        setApp(data.candidate.userData.application);
                        setPNMData(data.candidate);
                        setIsLoading2(false);
                        console.log("success")
                    } 
                    else {
                        console.log("no application");
                        navigate("/deliberations")
                    }
                })
            }
            else {
                console.log("user not found")
                // navigate("/login")
            }
        });


    }, [navigate]);


    return (
        (isLoading||isLoading2) ? <div></div> :
        <div>
            <div>
                <Header firstname={user.firstname} usertype={user.usertype} />
            </div>
            <div className='mx-8 my-8'>
                <ProfileForm userid={userid}/>
            </div>

        </div>
    )
}