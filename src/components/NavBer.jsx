import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormData";
import { ThemeContext } from "../context/Theme";

const NavBer = () => {
  const { user, logoutUser } = useContext(FormContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const signOut = () => {
    logoutUser();
    navigate("/login");
  };
  return (
    <div
      className={`navbar sticky top-0 left-0 w-full z-50 md:px-20 ${
        theme == "light"
          ? "bg-secondary shadow-md text-black"
          : "text-white bg-themeDatak"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`z-50 menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow bg-white`}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-gray-400 " : "text-black"
              }
            >
              Home
            </NavLink>
            {user ? (
              <>
                {" "}
                <NavLink
                  to={"/add-visa"}
                  className={({ isActive }) =>
                    `${isActive ? "text-gray-400" : ""} ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`
                  }
                >
                  Add Visa
                </NavLink>
                <NavLink
                  to={"/my-added-visa"}
                  className={({ isActive }) =>
                    `${isActive ? "text-gray-400" : ""} ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`
                  }
                >
                  My added visas
                </NavLink>
                <NavLink
                  to={"/my-visa-application"}
                  className={({ isActive }) =>
                    `${isActive ? "text-gray-400" : ""} ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`
                  }
                >
                  My Visa applications
                </NavLink>
              </>
            ) : (
              <></>
            )}
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                isActive ? "text-gray-400 " : "text-black"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="font-semibold text-xl">
          VisaGo
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 space-x-5 text-[17px] font-medium`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "text-gray-400" : ""} ${
                theme === "dark" ? "text-white" : "text-black"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/all-visa"}
            className={({ isActive }) =>
              `${isActive ? "text-gray-400" : ""} ${
                theme === "dark" ? "text-white" : "text-black"
              }`
            }
          >
            All Visas
          </NavLink>
          {user ? (
            <>
              {" "}
              <NavLink
                to={"/add-visa"}
                className={({ isActive }) =>
                  `${isActive ? "text-gray-400" : ""} ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`
                }
              >
                Add Visa
              </NavLink>
              <NavLink
                to={"/my-added-visa"}
                className={({ isActive }) =>
                  `${isActive ? "text-gray-400" : ""} ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`
                }
              >
                My added visas
              </NavLink>
              <NavLink
                to={"/my-visa-application"}
                className={({ isActive }) =>
                  `${isActive ? "text-gray-400" : ""} ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`
                }
              >
                My Visa applications
              </NavLink>
            </>
          ) : (
            <></>
          )}
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? "text-gray-400" : ""} ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`
                }
              >
                Contact
              </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 text-sm font-bold transition duration-300 rounded-md ${
            theme === "light" ? "text-white" : "text-white bg-themeDatak"
          }`}
        >
          {theme === "light" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                className="fill-sky-400/20 stroke-primary"
              ></path>
              <path
                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                className="stroke-primary"
              ></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                className="fill-sky-400/20"
              ></path>
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                className="fill-white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                className="fill-white"
              ></path>
            </svg>
          )}
        </button>
        {user ? (
          <div className="relative group">
            <img
              src={user?.photoURL}
              className="rounded-full w-10 h-10 cursor-pointer"
              alt="User"
            />
            <div className="absolute top-12 md:-left-10 -left-28 flex flex-col items-center gap-2 w-40 bg-white p-3 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-primary' : ''}`}>{user?.displayName}</h3>
              <button
                onClick={signOut}
                className="px-3 py-1 bg-custom-gradient text-white rounded-md text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="px-5 bg-custom-gradient font-bold text-white py-1 rounded-md">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="hidden lg:block md:block px-5 bg-custom-gradient font-bold text-white py-1 rounded-md">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBer;
