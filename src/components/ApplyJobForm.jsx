const ApplyJobForm = () => {
  return (
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>

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
  );
};

export default ApplyJobForm;
