import { BiTime } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { authContext } from "../utils/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../utils/hooks/useAxios";

const RegistrationForm = () => {
  const {
    createUser,
    SignInWithGoogle,
    updateUserProfile,
    setLoading,
    loading,
  } = useContext(authContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const axios = useAxios();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in ...");
    if (password.length < 6) {
      setPasswordError("The password is less than 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("The password don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError("The password don't have a capital letter");
      return;
    } else {
      setPasswordError("");
    }

    console.log(name, email, password);
    createUser(email, password)
      .then((res) => {
        updateUserProfile(name, photoUrl);
        toast.success("Successfully Registered !", { id: toastId });
        navigate(location?.state ? location.state : "/");
        // navigate("/");
        console.log(res);
      })
      .catch((error) => {
        setLoading(false);
        if (error.message.match(/email-already-in-use/g))
          setEmailError("This email already in use");
        toast.error("This email already in use", { id: toastId });
        console.log(error.message);
      });
  };
  const handleSignInWithGoogle = () => {
    const toastId = toast.loading("Logging in ...");
    SignInWithGoogle()
      .then((res) => {
        toast.success("Logged in", { id: toastId });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col gap-10 md:gap-0 items-center md:flex-row w-full justify-around">
      <form onSubmit={handleFormSubmit}>
        <h1 className="text-white px-10 mt-10 text-xl">
          Register here with your required information
        </h1>
        <div className="flex flex-col gap-2 md:p-10 ">
          <div className="flex flex-col  md:flex-row items-center justify-between">
            <label htmlFor="name" className="text-white  ">
              Full Name:{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-96 p-2 bg-white rounded-lg "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col  md:flex-row  items-center justify-between">
            <label htmlFor="email" className="text-white  ">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-96 p-2 bg-white rounded-lg "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {emailError && (
            <p className="text-xs text-error mt-2 text-center">{emailError}</p>
          )}

          <div className="flex flex-col  md:flex-row  items-center justify-between">
            <label htmlFor="password" className="text-white  ">
              Password:{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-96 p-2 bg-white rounded-lg "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {passwordError && (
            <p className="text-xs text-error mt-2 ">{passwordError}</p>
          )}
          <div className="flex flex-col  md:flex-row  items-center justify-between">
            <label htmlFor="photourl" className="text-white  ">
              Photo URL:{" "}
            </label>
            <input
              type="text"
              name="photourl"
              id="photourl"
              className="w-96 p-2 bg-white rounded-lg "
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              required
            />
          </div>

          <div className="md:ml-32 mt-4 flex flex-col  md:flex-row items-center gap-10">
            <input
              type="submit"
              name=""
              id=""
              value={"Register"}
              className="w-44 p-4 bg-gray-700 rounded-full text-white "
            />
            <button
              type="button"
              className="py-3 px-4 border rounded-full font-semibold flex items-center gap-2 text-lg bg-white"
              onClick={handleSignInWithGoogle}
            >
              <FcGoogle className="text-3xl" />
              <span>Register With Google</span>
            </button>
          </div>
        </div>
      </form>
      <div className="bg-gray-600 bg-opacity-25 rounded-xl w-80">
        <div className="p-10">
          <h1 className="text-lg font-semibold text-white">
            WHY TO HAVE AN ACCOUNT IN TALENTHUB?
          </h1>
          <div className=" mt-5">
            <BiTime className="text-3xl  text-white" />
            <p className="text-white relative">
              Fast applying for offers the necessary documents are always at
              hand
            </p>
          </div>
          <div className="mt-5">
            <FaChild className="text-3xl mb-1 text-white" />
            <p className="text-white relative">
              Effectively target employers You can share your profile and CV
              recruiters
            </p>
          </div>
          <div className="mt-5">
            <AiOutlineCheckCircle className="text-3xl  text-white" />
            <p className="text-white relative">
              Matching jobs We will suggest you offer to fit your needs on
              e-mail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
