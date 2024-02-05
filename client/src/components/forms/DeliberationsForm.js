import React from "react";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import PNMRow from "../PNMRow";
import ProfileForm from "./ProfileForm.js"
// import Profile from "../Profile"

export default function DeliberationsForm() {
    const [pnmData, setPNMData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);

    useEffect(() => {
        fetch("/api/admin/view-all-candidates").then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setPNMData(data.candidates);
                    setIsLoading(false);
                });
            } else {
                navigate("/login");
            }
        });
    }, []);

    const navigate = useNavigate();

    const handleProfileOpen = () => {
        setProfileOpen(true);
    }

    const handleProfileClose = () => {
        setProfileOpen(false);
    }

    return (
        isLoading ? <div>Loading Applicants...</div> :
            !profileOpen ?
            (<div>
                <div className="space-y-4 md:space-y-6">
                    <div className="">
                        <div>Number of Applicants: {pnmData.length}</div>
                        {/* <div className="grid grid-cols-2 w-80">
                            <div><a href="/api/admin/candidate-spreadsheet" target="_blank" className="text-xs rounded-md border border-blue-600 p-2 hover:opacity-60">Download Applicant CSV</a></div>
                            <div><a href="/api/admin/feedback-spreadsheet" target="_blank" className="text-xs rounded-md border border-blue-600 p-2 hover:opacity-60">Download Feedback CSV</a></div>
                        </div> */}

                    </div>

                    <div className="grid grid-cols-12 gap-x-2 font-bold text-xs">
                        <div className='col-span-2'>
                            Name
                        </div>
                        <div className='col-span-2'>
                            Email
                        </div>
                        <div className='col-span-1'>
                            Class Year
                        </div>
                        <div className='col-span-1'>Meet the Team</div>
                        <div className='col-span-1'>PD Panel</div>
                        <div className='col-span-1'>DEI Panel</div>
                        <div className='col-span-1'>Resume Review</div>
                        <div className='col-span-1'>Cheesecake Social</div>
                        <div className='col-span-1'>Case Workshop</div>
                        <div className='col-span-1'>Feedback #</div>
                    </div>
                    <div>
                        {pnmData.map((pnm, index) => {
                            return (
                                <div className="p-0.5" onClick={() => {setSelectedProfile(pnm); handleProfileOpen()}}>
                                    <PNMRow key={pnm.email} pnm={pnm} index={index} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>):

            <div className="p-3">
                <button className="p-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100" onClick={() => handleProfileClose()}>Back</button>
                <ProfileForm userid={selectedProfile.userid}/>
            </div>
    );
}
