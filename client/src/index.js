import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root.js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Styles
import "./stylesheets/output.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
