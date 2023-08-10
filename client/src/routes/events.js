import React from 'react';
import Header from '../components/Header';

export default function Events() {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="bg-gray-50 dark:bg-gray-900">
                <div className="text-3xl font-medium text-center py-10">
                    Welcome to MCG's Fall 2023 Recruitment Cycle Events
                </div>

                <div className="flex flex-wrap gap-8 px-10 justify-center">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="">
                            <a href="#">
                                <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Meet the Team</h5>
                            </a>
                            <p className=" text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7:30 - 8:30pm, September 13th Room 1-190</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Meet current members of MCG and learn more about MCG's recruitment process during our first recruitment event of the semester.</p>
                        </div>

                        <form className="space-y-3">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-in Code:</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Secret Code" required />
                            </div>
                            <button className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Check-In To Event</button>
                        </form>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DEI Panel</h5>
                        </a>
                        <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7:30 - 8:30pm, September 14th Room 1-190</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Talk to current women and BIPOC within MCG. Hear about their experiences and how MCG is trying ot create a more inclusive environment.</p>

                        <form className="space-y-3">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-in Code:</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Secret Code" required />
                            </div>
                            <button className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Check-In To Event</button>
                        </form>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Resume Review</h5>
                        </a>
                        <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7-9pm | September 15th | Room 6-120</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Work on your resume wiht the help of MCG consultants who have landed offeres at top consulting, finance, and tech companies.</p>

                        <form className="space-y-3">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-in Code:</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Secret Code" required />
                            </div>
                            <button className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Check-In To Event</button>
                        </form>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cheesecake Social</h5>
                        </a>
                        <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7-9pm | September 15th | Room 6-120</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Work on your resume wiht the help of MCG consultants who have landed offeres at top consulting, finance, and tech companies.</p>

                        <form className="space-y-3">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-in Code:</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Secret Code" required />
                            </div>
                            <button className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Check-In To Event</button>
                        </form>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Case Workshop</h5>
                        </a>
                        <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7-9pm | September 15th | Room 6-120</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Work on your resume wiht the help of MCG consultants who have landed offeres at top consulting, finance, and tech companies.</p>

                        <form className="space-y-3">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-in Code:</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Secret Code" required />
                            </div>
                            <button className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Check-In To Event</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}