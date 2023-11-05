import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { BiSolidUser } from "react-icons/bi";
import { authContext } from "../utils/context/AuthProvider";

const MainLayout = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const { user, SignOutUser, loading } = useContext(authContext);
  console.log(user);

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
    ? "navbar sticky  top-0 bg-white  transition duration-100 ease-in-out z-50 shadow"
    : "navbar  absolute transition p-6 top-0 ";

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
                  className={`text-gray-700  menu menu-horizontal  font-bold`}
                >
                  {/* Navbar menu content here */}
                  <li>
                    <NavLink to={"/"}>HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/add-jobs"}>ADD JOB</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/my-posted-jobs"}>MY POSTED JOBS</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/my-bids"}>MY BIDS</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/bid-request"}>BID REQUEST</NavLink>
                  </li>
                </ul>
              </div>
              <div className="">
                {loading ? (
                  <span className="loading loading-ring loading-md scale-150 mr-5"></span>
                ) : user ? (
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          src={`${
                            user.photoURL
                              ? user.photoURL
                              : "https://i.ibb.co/rHzPb0S/icon-256x256.png"
                          }`}
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a className="justify-between">
                          Profile/{user.displayName}
                        </a>
                      </li>
                      <li>
                        <a>Settings</a>
                      </li>
                      <li>
                        <button onClick={SignOutUser}>Logout</button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    to={"/login"}
                    className="w-10  h-10 bg-[#12CD6A] hover:bg-black transition ease-in-out duration-150 text-white flex justify-center items-center rounded-full text-xl"
                  >
                    <BiSolidUser />
                  </NavLink>
                )}
              </div>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>

        <div className="drawer-side h-full">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 h-full  bg-base-200">
            {/* Sidebar content here */}
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/add-jobs"}>ADD JOB</NavLink>
            </li>
            <li>
              <NavLink to={"/my-posted-jobs"}>MY POSTED JOBS</NavLink>
            </li>
            <li>
              <NavLink to={"/my-bids"}>MY BIDS</NavLink>
            </li>
            <li>
              <NavLink to={"/bid-request"}>BID REQUEST</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
