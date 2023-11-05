import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { Tab } from "react-tabs";
import { authContext } from "../utils/context/AuthProvider";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { SignInUser, loading, setLoading, SignInWithGoogle } =
    useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in ...");

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    SignInUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Logged in", { id: toastId });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Invalid Login Details", { id: toastId });
        setLoginError("Invalid login details!");
      });
  };

  const handleSignInWithGoogle = () => {
    const toastId = toast.loading("Logging in ...");
    SignInWithGoogle()
      .then(() => {
        toast.success("Logged in", { id: toastId });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Invalid Login Details", { id: toastId });
        console.log(error);
      });
  };
  return (
    <div className="flex w-full justify-around">
      <form onSubmit={handleLoginSubmit}>
        <h1 className="text-white px-10 mt-10 text-xl">
          Login here with your required information
        </h1>
        <div className="flex flex-col gap-2 p-10 ">
          <div className="flex  items-center justify-between">
            <label htmlFor="email" className="text-white  ">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-96 p-2 bg-white rounded-lg "
            />
          </div>

          <div className="flex  items-center justify-between">
            <label htmlFor="password" className="text-white  ">
              Password:{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-96 p-2 bg-white rounded-lg "
            />
          </div>
          {loginError && (
            <p className="text-xs text-error mt-2">{loginError}</p>
          )}
          <div className="ml-32 mt-4 flex items-center gap-10">
            <input
              type="submit"
              name=""
              id=""
              value={"SIGN IN"}
              className="w-44 p-4 bg-gray-700 rounded-full text-white "
            />
            <button
              type="button"
              className="py-3 px-4 border rounded-full font-semibold flex items-center gap-2 text-lg bg-white"
              onClick={handleSignInWithGoogle}
            >
              <FcGoogle className="text-3xl" />
              <span>SIGN IN WITH GOOGLE</span>
            </button>
          </div>
        </div>
      </form>
      <div className="bg-gray-600 bg-opacity-25 rounded-xl w-80">
        <div className="p-10">
          <h1 className="text-lg font-semibold text-white">
            DON'T HAVE AN ACCOUNT?
          </h1>
          <div className=" mt-5">
            <p className="text-white relative">
              If you'd like to find out more about how Jobsite can help you with
              your recruitment needs, please complete this enquiry form.
            </p>
          </div>

          <div className="mt-5">
            <p className="text-white relative">
              A member of our Sales team will contact you shortly.
            </p>
          </div>

          <div className="mt-5">
            <Tab
              className={
                "w-44 p-4 text-center font-semibold bg-gray-700 rounded-full text-white cursor-pointer"
              }
            >
              Register
            </Tab>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
