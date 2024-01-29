import React from "react";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router";
import { BrowserRouter as Router, Route} from 'react-router-dom';

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
        <div></div>
    
)}
