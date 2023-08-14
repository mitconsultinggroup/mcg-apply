import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function FeedbackForm() {
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [event, setEvent] = useState("");
    const [searchedApplicant, setSearchedApplicant] = useState("");
    const [applicantEmail, setApplicantEmail] = useState("");
    const [error, setError] = useState("");

    const [ratingState, setRatingState] = useState({
        commitment: 0,
        socialfit: 0,
        challenge: 0,
        tact: 0
    });


    const [applicants, setApplicants] = useState([]);
    const [filteredApp, setFilteredApp] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/feedback/all-candidates")
            .then((res) => res.json())
            .then((result) => {
                if (result.candidates) {
                    setApplicants(result.candidates)
                }
            })
            .catch((err) => {
                navigate("/login");
            });
    }, []);

    const submitFeedback = () => {
        const data = {
            candidate: applicantEmail,
            event: event,
            scores: ratingState,
            comments: comment
        }
        fetch("/api/feedback/submit-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.ok) {
                    setSubmitted(true);
                }
                else {
                    res.json().then(
                        (result) => {
                            setError(result.message);
                        }
                    )
                }
            }
            )
            .catch((err) => {
                setError(err.message);
            });
    }

    const values = [{
        id: "commitment",
        name: "Commitment",
    },
    {
        id: "socialfit",
        name: "Social Fit",
    },
    {
        id: "challenge",
        name: "Willingness to take on a challenge",
    },
    {
        id: "tact",
        name: "Tact/Professionalism",
    }];

    const setScoreHandler = (score, id) => {
        let currentRatings = { ...ratingState };
        currentRatings[id] = score;
        setRatingState(currentRatings);
    }

    const handleSearch = (e) => {
        let searchVal = e.target.value
        if (searchVal === searchedApplicant) {
            return
        }
        setSearchedApplicant(searchVal);
        if (searchVal === "") { setFilteredApp([]); return; }
        const filterBySearch = applicants.filter((applicant) => {
            if (applicant.name.toLowerCase()
                .includes(searchVal.toLowerCase())) { return applicant; }
        })
        setFilteredApp(filterBySearch);
    }

    const handleSelectApp = (applicant) => {
        setSearchedApplicant(applicant.name);
        setApplicantEmail(applicant.email);
        setFilteredApp([]);
    }

    const resetInputs = () => {
        setApplicantEmail("");
        setSearchedApplicant("");
        setEvent("");
        setRatingState({
            commitment: 0,
            socialfit: 0,
            challenge: 0,
            tact: 0
        })
        setComment("");
        setSubmitted(false);
        setError("");
    }

    const checkEnter = key => {
        if (key === 'Enter') {
            handleSelectApp(filteredApp[0]);
        }
    }

    return (
        <div className="bg-gray-50">
            <div className="flex flex-col items-center justify-center py-8 ">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            MCG Fall 2023 Feedback Form
                        </h1>

                        <div className='flex flex-col space-y-4'>
                            <h3>Applicant:</h3>
                            <div className='border-b border-l border-r border-gray-300 rounded-lg'>
                                <input value={searchedApplicant} onKeyUp={e => checkEnter(e.key)} onChange={(e) => handleSearch(e)} className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500" placeholder="Search for an applicant" />
                                <div className="max-h-36 overflow-y-auto">
                                    {filteredApp.map((applicant) => {
                                        return (
                                            <button key={applicant.email} onClick={() => { handleSelectApp(applicant) }} className='block w-full h-8 border-bottom border-gray-500 rounded md hover:bg-gray-200'>
                                                {applicant.name}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="">
                                <h3>Event:</h3>
                                <select value={event} onChange={(e) => { setEvent(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1 mb-2">
                                    <option value="">Choose an event</option>
                                    <option value="Coffee Chat">Coffee Chat</option>
                                    <option value="Meet the Team">Meet the Team</option>
                                    <option value="DEI Panel">DEI Panel</option>
                                    <option value="Resume Review">Resume Review</option>
                                    <option value="Cheesecake Social">Cheesecake Social</option>
                                    <option value="Case Workshop">Case Workshop</option>
                                    <option value="Interview">Interview</option>
                                </select>
                            </div>

                            {values.map((value) => (
                                <div key={value.name} className="">
                                    <h3 className='mb-0'>{value.name}:</h3>
                                    <select value={ratingState[value.id]} onChange={(e) => { setScoreHandler(e.target.value, value.id) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1 mb-2">
                                        <option value="0">Select a score</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>))}

                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Comments: </label>
                            <textarea onChange={(e) => {
                                setComment(e.target.value);
                            }}
                                rows="8" type="comments" name="comments" id="comments" className="resize-y bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Write your comments here" required="" />
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <button onClick={submitFeedback} className="text-sm h-10 px-5 text-white transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
                                Submit Feedback
                            </button>
                            <button onClick={resetInputs} className="text-sm h-10 px-5 text-white transition-colors duration-150 bg-gray-400 rounded-lg focus:shadow-outline hover:bg-gray-500">
                                Reset Inputs
                            </button>
                        </div>

                        <p className="text-red-500">{error.capitalize()}</p>
                        {submitted ? <p className="text-green-500">Submitted successfully!</p> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}