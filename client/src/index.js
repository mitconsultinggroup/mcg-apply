import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root.js";
import Login from "./components/login.js";
import SignUp  from "./components/signup.js";
import Application from "./components/apply.js";
import Events from "./components/events.js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Styles
import "./stylesheets/output.css";

const router = createBrowserRouter([

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
