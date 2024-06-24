import React, { useContext, useState } from "react";
import MyContext from "../../context/data/MyContext";
import { Link } from "react-router-dom";
import { Typography, IconButton, Avatar } from "@material-tailwind/react";
import { AiOutlineShareAlt, AiOutlineSearch } from "react-icons/ai";
import SearchDialog from "../searchDialog/SearchDialog";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  const admin = localStorage.getItem("admin");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4">
          <ul className="flex items-center justify-between py-4">
            <li>
              <ul className="flex items-center gap-x-4">
                <li>
                  <Link to={"/"} className="text-gray-50 hover:opacity-80">
                    <div>
                      <span className="text-xl font-bold">Zo</span>
                      <span className="text-xl font-bold text-yellow-600">
                        Blogs
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="hidden md:block">
                  <Link
                    to={"/"}
                    className="cursor-pointer text-sm font-medium text-gray-50 transition-colors duration-300 hover:text-yellow-500"
                  >
                    Home
                  </Link>
                </li>

                <li className="hidden md:block">
                  <Link
                    to={"/allblogs"}
                    className="cursor-pointer text-sm font-medium text-gray-50 transition-colors duration-300 hover:text-yellow-500"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex items-center gap-x-4">
                {!admin ? (
                  <li>
                    <button className="cursor-pointer bg-transparent px-4 py-2 text-sm font-medium text-gray-50 transition-colors duration-300 hover:text-yellow-500">
                      <Link to={"/adminlogin"}>Admin Login</Link>
                    </button>
                  </li>
                ) : (
                  ""
                )}
                <div>
                  <Link to={"/dashboard"}>
                    <div className="">
                      <Avatar
                        key={1}
                        src={
                          "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                        }
                        alt="avatar"
                        withBorder={true}
                        className="p-0.5 text-red-500 w-10 h-10"
                        style={{
                          border:
                            mode === "dark"
                              ? "2px solid rgb(226, 232, 240)"
                              : "2px solid rgb(30, 41, 59)",
                        }}
                      />
                    </div>
                  </Link>
                </div>
                <div>
                  <SearchDialog />
                </div>

                <div>
                  {mode === "light" ? (
                    <>
                      {/* Light Button  */}
                      <IconButton
                        onClick={toggleMode}
                        className="lg:inline-block rounded-full"
                        style={{
                          background: mode === "light" ? "#ced6e0" : "#57606f",
                          color: mode === "dark" ? "white" : "black",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          />
                        </svg>
                      </IconButton>
                    </>
                  ) : (
                    <>
                      {/* Dark Button  */}
                      <IconButton
                        onClick={toggleMode}
                        className="lg:inline-block rounded-full"
                        style={{
                          background: mode === "light" ? "#ced6e0" : "#57606f",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                          />
                        </svg>
                      </IconButton>
                    </>
                  )}
                </div>
                <li className="md:hidden">
                  <button
                    onClick={toggleSidebar}
                    aria-label="menu button"
                    className="cursor-pointer bg-yellow-600 px-2 py-2 text-sm font-medium text-gray-50 transition-colors duration-300 hover:bg-yellow-500"
                  >
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/*👇 Side navbar 👇*/}
        <div
          className={`fixed top-0 right-0 z-50 h-full w-full bg-black bg-opacity-50 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={toggleSidebar}
        >
          <div
            className="absolute right-0 top-0 z-50 h-full w-[300px] border-l bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b p-4">
              <a className="cursor-pointer">
                <div>
                  <span className="text-xl font-bold">Zo</span>
                  <span className="text-xl font-bold text-yellow-600">
                    Blogs
                  </span>
                </div>
              </a>
              <button
                aria-label="close"
                onClick={toggleSidebar}
                className="text-gray-900 hover:text-gray-900/70"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="border-b p-4">
              <ul className="flex flex-col gap-y-3">
                <li>
                  <Link
                    to={"/"}
                    className="cursor-pointer text-sm font-medium text-gray-900 transition-colors duration-300 hover:text-yellow-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/allblogs"}
                    className="cursor-pointer text-sm font-medium text-gray-900 transition-colors duration-300 hover:text-yellow-500"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="p-4">
              <a className="flex cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-gray-50 transition-colors duration-300 hover:bg-yellow-500">
                {/* <span>Make A Resume</span> */}
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/*👆 *********** 👆*/}
      </nav>
      <hr className="border-gray-300" />
    </div>
  );
};

export default Navbar;
