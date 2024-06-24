import React, { useContext } from "react";
import myContext from "../../context/data/MyContext";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <footer
      className={`py-6 ${
        mode === "dark" ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"
      } border-t-4 ${
        mode === "dark" ? "border-gray-200" : "border-gray-800"
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-5">
        {/* Footer Brand */}
        <div className="flex items-center">
          <span
            className={`text-2xl font-bold ${
              mode === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            ZoBlogs
          </span>
        </div>
        {/* Footer Links */}
        
        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="#"
            className={`${
              mode === "dark" ? "text-gray-200" : "text-gray-800"
            } hover:text-gray-500`}
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.46 6c-.77.34-1.6.57-2.47.68.89-.53 1.57-1.37 1.89-2.37-.84.5-1.78.87-2.78 1.07a4.9 4.9 0 0 0-8.4 4.46A13.93 13.93 0 0 1 1.67 4.88a4.9 4.9 0 0 0 1.52 6.53c-.7-.02-1.36-.22-1.94-.54v.05c0 2.28 1.63 4.18 3.8 4.61-.4.1-.8.16-1.23.16-.3 0-.6-.03-.89-.08.6 1.88 2.32 3.25 4.36 3.28A9.9 9.9 0 0 1 1.2 19.29 13.94 13.94 0 0 0 8.07 21c9.05 0 14-7.5 14-14v-.64c.95-.68 1.78-1.53 2.44-2.5l-.02-.02z"></path>
            </svg>
          </a>
          <a
            href="#"
            className={`${
              mode === "dark" ? "text-gray-200" : "text-gray-800"
            } hover:text-gray-500`}
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.16 20.29H3.61V9.02h3.55v11.27zM5.39 7.67c-1.14 0-2.07-.93-2.07-2.07s.93-2.07 2.07-2.07 2.07.93 2.07 2.07-.93 2.07-2.07 2.07zm14.9 12.62h-3.55v-5.61c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.96v5.72h-3.55V9.02h3.41v1.53h.05c.47-.9 1.61-1.85 3.31-1.85 3.54 0 4.19 2.33 4.19 5.36v6.23z"></path>
            </svg>
          </a>
          <a
            href="#"
            className={`${
              mode === "dark" ? "text-gray-200" : "text-gray-800"
            } hover:text-gray-500`}
          >
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.05 8.2 8.87v-6.29h-2.47v-2.58h2.47v-1.97c0-2.44 1.45-3.79 3.67-3.79 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.71h2.7l-.43 2.58h-2.27v6.29c4.6-.82 8.2-4.46 8.2-8.87 0-5.5-4.46-9.96-9.96-9.96z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
