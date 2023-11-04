import { useEffect, useState } from "react";

const MainLayout = ({ children }) => {
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isNavSticky
    ? "navbar sticky  top-0 bg-white  transition duration-200 ease-in-out "
    : "navbar  absolute transition p-6";

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle dur" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className={navbarClass}>
            <div className="w-11/12 mx-auto flex justify-between ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className=" px-2 mx-2">
                <img
                  src="/assets/images/talenthub-logo.svg"
                  alt=""
                  className="w-48"
                />
              </div>
              <div className="flex-none hidden lg:block">
                <ul
                  className={`${
                    isNavSticky ? "text-black" : "text-white"
                  }  menu menu-horizontal  font-semibold`}
                >
                  {/* Navbar menu content here */}
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>My Jobs</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <button className="btn btn-success text-white">Login</button>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
