import { BiTime } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const RegistrationForm = () => {
  return (
    <div className="flex w-full justify-around">
      <form>
        <h1 className="text-white px-10 mt-10 text-xl">
          Register here with your required information
        </h1>
        <div className="flex flex-col gap-2 p-10 ">
          <div className="flex  items-center justify-between">
            <label htmlFor="name" className="text-white  ">
              Full Name:{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-96 p-2 bg-white rounded-lg "
            />
          </div>

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

          <div className="flex  items-center justify-between">
            <label htmlFor="photourl" className="text-white  ">
              Photo URL:{" "}
            </label>
            <input
              type="text"
              name="photourl"
              id="photourl"
              className="w-96 p-2 bg-white rounded-lg "
            />
          </div>

          <div className="ml-32 mt-4 flex items-center gap-10">
            <input
              type="submit"
              name=""
              id=""
              value={"Register"}
              className="w-44 p-4 bg-gray-700 rounded-full text-white "
            />
            <button className="py-3 px-4 border rounded-full font-semibold flex items-center gap-2 text-lg bg-white">
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
