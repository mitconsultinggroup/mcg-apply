import React from 'react';
import Logo from "../assets/logos/mcg-long-logo-noback.png"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export default function MemberHeader({ firstname }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/me").then(
      (response) => {
        console.log(response)

        if (response.ok) {
          return response.json()
        }
        else {
          navigate("/login")
        }
      }
    ).then((data) => {
      setUserData(data.data);
      setIsLoading(false);
    });
  }, [navigate]);

  return (
    <nav className="text-sm text-xl bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://mitconsulting.group/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="MCG Logo" />
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to="/events">
              <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</span>
            </Link>
            <Link to="/applicants">
              <span className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Feedback</span>
            </Link>
            <div>
              Hi, {isLoading ? "Loading..." : userData.firstName}
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
}