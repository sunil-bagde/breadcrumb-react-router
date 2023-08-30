import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { AppLayout, GuestLayout } from "./layout";
import { Login, Home, CreateUser, ListUser } from "./components";
import { NavLink } from "react-router-dom";

import "./index.css";
export const routes = [
  {
    element: <GuestLayout />,
    path: "/",
    children: [
      {
        path: "/login",
        element: <Login />,
        handle: {
          crumb: () => (
            <span
              to="/login"
 
            >
              Login
            </span>
          ),
        },
      },
      {
        path: "features/:id",
        handle: {
          crumb: () => [
            <span
              to="/features"
 
            >
              Feature 1
            </span>,
            <span
              to="/features"
 
            >
              Feature 2
            </span>,
          ],
        },
        element: (
          <h2 className="container mx-auto font-black  ">
            <>
              Features List
              <p />
              <ul className="list-disc font-normal">
                <li>
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
              </ul>
              <ol className=" list-disc font-normal">
                <li>
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
              </ol>
              <ul className="list-disc font-normal">
                <li>
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
              </ul>
            </>
          </h2>
        ),
      },
      {
        path: "features",
        handle: {
          crumb: () => (
            <span
              to="/features"
 
            >
              Features
            </span>
          ),
        },
        element: (
          <h2 className="container mx-auto font-black  ">
            <>
              Features
              <p />
              <Link to="list" className=" font-light">
                show moret
              </Link>
            </>
          </h2>
        ),
      },
      {
        path: "team/:id",
        handle: {
          crumb: () => [
            <span
              to="/team"
 
            >
              Team
            </span>,
            <span
              to="/team"
 
            >
              Details
            </span>,
          ],
        },
        element: <div className="container mx-auto ">Teams details</div>,
      },
      {
        path: "team",
        handle: {
          crumb: () => (
            <span
              to="/team"
 
            >
              Team
            </span>
          ),
        },
        element: (
          <div className="container mx-auto ">
            Teams
            <div className="flex flex-col">
              <ul className="list-none">
                <li>
                  <Link className="text-blue-700 text-lg" to="1">
                    {" "}
                    Team 1
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-700 text-lg" to="2">
                    {" "}
                    Team 2
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-700 text-lg" to="3">
                    {" "}
                    Team 3
                  </Link>
                </li>
                <li>
                  <Link className="text-blue-700 text-lg" to="4">
                    {" "}
                    Team 4
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      ,
      {
        path: "marketplace",
        element: (
          <h2 className="container mx-auto font-black  ">Marketplace</h2>
        ),
        handle: {
          crumb: () => (
            <span
              to="/team"
 
            >
              Marketplace
            </span>
          ),
        },
      },
    ],
  },

  {
    element: <AppLayout />,
    path: "/user",
    children: [
      {
        element: <ListUser />,
      },
      {
        element: <Home />,
        path: "profile",
      },
      {
        element: <CreateUser />,
        path: "new",
      },
    ],
  },
];
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
