import React from 'react';
import MemberHeader from '../components/headers/MemberHeader';
import { useState } from "react"


export default function FeedbackForm() {
    const [chooseBtn, setChooseBtn] = useState();
    const aRR = [
        { id: 1, p: 1, btn: false },
        { id: 2, p: 2, btn: false },
        { id: 3, p: 3, btn: false },
        { id: 4, p: 4, btn: false },
        { id: 5, p: 5, btn: false },
        { id: 6, p: 6, btn: false },
        { id: 7, p: 7, btn: false },
        { id: 8, p: 8, btn: false },
        { id: 9, p: 9, btn: false },
        { id: 10, p: 10, btn: false },
    ];
    return (
        <div className="bg-gray-50">
            <div>
                <MemberHeader />
            </div>
            <div className="flex flex-col items-center justify-center py-8 ">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            MCG Fall 2023 Feedback Form
                        </h1>
                        <div>
                            <form className="md:space-y-6">
                                Event:
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5">
                                    <option selected>Choose an event</option>
                                    <option >Coffee Chat</option>
                                    <option >Meet the Team</option>
                                    <option >DEI Panel</option>
                                    <option >Resume Review</option>
                                    <option >Cheesecake Social</option>
                                    <option >Case Workshop</option>
                                    <option >Interview</option>
                                </select>
                            </form>
                        </div>

                        <div>
                            Recruitment Values:
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Commitment:</label>
                            <div className="flex font-semibold space-x-7 pb-2 justify-center w-full   items-center">
                                {aRR.map((btn, i) => {
                                    return (
                                        <button
                                            value={i + 1}
                                            style={{
                                                color: `${btn.id === chooseBtn ? "white" : ""}`,
                                                backgroundColor: `${btn.id === chooseBtn ? "hsl(216, 12%, 54%)" : ""
                                                    }`,
                                            }}
                                            className="text-white bg-red-700 hover:red-800 focus:ring-4 focus:outline-none focus:rired-300 font-medium rounded text-sm p-2.5 text-center inline-flex items-center mr-2"
                                        >
                                            {i + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Social Fit:</label>
                            <div className="flex font-semibold space-x-7 pb-2 justify-center w-full   items-center">
                                {aRR.map((btn, i) => {
                                    return (
                                        <button
                                            value={i + 1}
                                            style={{
                                                color: `${btn.id === chooseBtn ? "red" : ""}`,
                                                backgroundColor: `${btn.id === chooseBtn ? "blue" : ""
                                                    }`,
                                            }}
                                            className="text-white bg-red-700 hover:red-800 focus:ring-4 focus:outline-none focus:rired-300 font-medium rounded text-sm p-2.5 text-center inline-flex items-center mr-2"
                                        >
                                            {i + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Willingness to take on challenge:</label>
                            <div className="flex font-semibold space-x-7 pb-2 justify-center w-full  items-center">
                                {aRR.map((btn, i) => {
                                    return (
                                        <button
                                            value={i + 1}
                                            style={{
                                                color: `${btn.id === chooseBtn ? "red" : ""}`,
                                                backgroundColor: `${btn.id === chooseBtn ? "blue" : ""
                                                    }`,
                                            }}
                                            className="text-white bg-red-700 hover:red-800 focus:ring-4 focus:outline-none focus:rired-300 font-medium rounded text-sm p-2.5 text-center inline-flex items-center mr-2"
                                        >
                                            {i + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Tact/Professionalism:</label>
                            <div className="flex font-semibold space-x-7 pb-2 justify-center w-full   items-center">
                                {aRR.map((btn, i) => {
                                    return (
                                        <button
                                            value={i + 1}
                                            style={{
                                                color: `${btn.id === chooseBtn ? "red" : ""}`,
                                                backgroundColor: `${btn.id === chooseBtn ? "blue" : ""
                                                    }`,
                                            }}
                                            className="text-white bg-red-700 hover:red-800 focus:ring-4 focus:outline-none focus:rired-300 font-medium rounded text-sm p-2.5 text-center inline-flex items-center mr-2"
                                        >
                                            {i + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Comments: </label>
                            <textarea rows="8" type="comments" name="comments" id="comments" className="resize-y bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Write your comments here" required="" />
                        </div>

                        <button className="text-sm h-10 px-5 text-white transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
                            Submit Feedback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}