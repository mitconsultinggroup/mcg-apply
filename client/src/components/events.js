import React from 'react';
import Header from './header';

export default function Events() {
    return (
        <div>
            <Header/>

            <div className="text-3xl">
                Events
            </div>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Meet the Team</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">7:30 - 8:30pm, September 13th in Room 1-190.</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Meet current members of MCG during our first recruitment event</p>

                <form class="space-y-3">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check-in Code:</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Meet The Team" required/>
                    </div>
                    <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check-In To Event</button>
                </form>


            </div>  

        </div>
    )
  }