import { Tab } from "react-tabs";

const LoginForm = () => {
  return (
    <div className="flex w-full justify-around">
      <form>
        <h1 className="text-white px-10 mt-10 text-xl">
          Register here with your required information
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
          <div className="ml-10 mt-4 text-white flex items-center">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="mr-3 "
            />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <div className="ml-32 mt-4 flex items-center gap-10">
            <input
              type="submit"
              name=""
              id=""
              value={"SIGN IN"}
              className="w-44 p-4 bg-gray-700 rounded-full text-white "
            />
            <p className="text-lg font-semibold">Forgot Password?</p>
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
