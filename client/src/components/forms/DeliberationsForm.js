import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import PNMRow from "../PNMRow";

export default function DeliberationsForm() {
    const [pnmData, setPNMData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        isLoading ? <div>Loading Applicants...</div> :
            <div>
                <div className="space-y-4 md:space-y-6">
                    <div className="">
                        <div>Number of Applicants: {pnmData.length}</div>
                        <div className="grid grid-cols-2 w-80">
                            <div><a href="/api/admin/candidate-spreadsheet" target="_blank" className="text-xs rounded-md border border-blue-600 p-2 hover:opacity-60">Download Applicant CSV</a></div>
                            <div><a href="/api/admin/feedback-spreadsheet" target="_blank" className="text-xs rounded-md border border-blue-600 p-2 hover:opacity-60">Download Feedback CSV</a></div>
                        </div>

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
                        <div className='col-span-1'>DEI Panel</div>
                        <div className='col-span-1'>Resume Review</div>
                        <div className='col-span-1'>Cheesecake Social</div>
                        <div className='col-span-1'>Case Workshop</div>
                        <div className='col-span-1'>
                            Resume
                        </div>
                        <div className='col-span-1'>
                            Image
                        </div>
                    </div>
                    <div>
                        {pnmData.map((pnm, index) => {
                            return <PNMRow key={pnm.email} pnm={pnm} index={index} />;
                        })}
                    </div>
                </div>
            </div>
    );
}
