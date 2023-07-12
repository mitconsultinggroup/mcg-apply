import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root.js";
import Login from "./routes/login.js";
import SignUp  from "./routes/signup.js";
import Application from "./components/apply.js";
import Events from "./components/events.js";
import PublicEvents from "./components/publicEvents.js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Styles
import "./stylesheets/output.css";
import Applicants from "./components/applicants.js";


const router = createBrowserRouter([


  {
    path: "/events",
    element: <Events />,
  },


  {
    path: "/feedback",
    element: <Applicants />,
  },


  {
    path: "/publicevents",
    element: <PublicEvents />,
  },


  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/application",
    element: <Application />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Login />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
