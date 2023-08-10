import React from 'react';

export default function PNMProfile() {
    return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center mb-2 gap-10">
                    <img class="w-20 h-20 rounded-full" src="" alt="Lucas Rothman"/>
                    <div>
                        <button onclick = "window.location.href='https://google.com'" type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Give Feedback</button>
                    </div>
                </div>
                <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                    Lucas Rothman
                </p>
        </div>
    )
  }