import React from 'react';
import { useEffect, useState } from 'react';

export default function PNMProfile({ pnm, index }) {
    const [events, setEvents] = useState({});
    const [classYear, setClassYear] = useState("-");
    const [resume, setResume] = useState(false);
    const [profileImg, setProfileImg] = useState(false);
    const openResume = () => {
        window.open(`api/admin/candidate-resume/${pnm.email}`, "_blank");
    }
    const openProfileImg = () => {
        window.open(`api/admin/candidate-profile-img/${pnm.email}`, "_blank");
    }

    useEffect(() => {
        if (pnm.userData) {
            if (pnm.userData.events) {
                setEvents(pnm.userData.events);
            }
        } if (pnm.userData) {
            if (pnm.userData.application) {
                setClassYear(pnm.userData.application.classYear);
                setResume(true)
                if (pnm.userData.application.profileImg) {
                    setProfileImg(true)
                }
            }
        }
    })

    return (
        <div className='grid grid-cols-12 gap-x-2'>
            <div className='col-span-2'>
                {pnm.firstname} {pnm.lastname}
            </div>
            <div className='col-span-2'>
                {pnm.email}
            </div>
            <div className='col-span-1'>
                {classYear}
            </div>
            <div className='col-span-1'>{events.meettheteam ? "Yes" : "-"}</div>
            <div className='col-span-1'>{events.deipanel ? "Yes" : "-"}</div>
            <div className='col-span-1'>{events.resumereview ? "Yes" : "-"}</div>
            <div className='col-span-1'>{events.cheesecakesocial ? "Yes" : "-"}</div>
            <div className='col-span-1'>{events.caseworkshop ? "Yes" : "-"}</div>
            <div className='col-span-1'>
                <button className={resume ? "text-blue-600 hover:underline" : ""} onClick={resume ? openResume : ""}>{resume ? "View" : "-"}</button>
            </div>
            <div className='col-span-1'>
                <button className={profileImg ? "text-blue-600 hover:underline" : ""} onClick={profileImg ? openProfileImg : ""}>{profileImg ? "View" : "-"}</button>
            </div>
        </div>
    )
}