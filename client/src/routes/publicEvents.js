import React from 'react';
import PublicHeader from '../components/headers/PublicHeader';

export default function PublicEvents() {
    return (
        <div>
            <div>
                <PublicHeader />

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
                            <p className=" text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7:30 - 8:30pm | September 13th | Room 1-190</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Meet current members of MCG and learn more about MCG's recruitment process during our first recruitment event of the semester.</p>
                        </div>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DEI Panel</h5>
                        </a>
                        <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7:30 - 8:30pm | September 14th | Room 1-190</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Talk to current women and BIPOC within MCG. Hear about their experiences and how MCG is trying ot create a more inclusive environment.</p>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Resume Review</h5>
                        </a>
                        <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7-9pm | September 15th | Room 6-120</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Work on your resume wiht the help of MCG consultants who have landed offeres at top consulting, finance, and tech companies.</p>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cheesecake Social</h5>
                        </a>
                        <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7-9pm | September 15th | Invite Only</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Work on your resume wiht the help of MCG consultants who have landed offeres at top consulting, finance, and tech companies.</p>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Case Workshop</h5>
                        </a>
                        <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">7-9pm | September 15th | Invite Only </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Work on your resume wiht the help of MCG consultants who have landed offeres at top consulting, finance, and tech companies.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}