const ApplyJobForm = () => {
  return (
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>

      <div className="p-4 ">
        <h1 className="text-3xl font-semibold text-center">
          Place Your Bid Here
        </h1>
        <p className="text-sm text-center mt-2 text-[#12CD6A]">
          Web Designer at Google inc
        </p>
      </div>
      <div className="flex flex-col gap-2 p-10 ">
        <div className="mb-3">
          <label htmlFor="price" className="text-gray-600  text-lg">
            Price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
          />
        </div>

        <div className="">
          <label htmlFor="deadline" className="text-gray-600  text-lg">
            Deadline:
          </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
          />
        </div>

        <div className="">
          <label htmlFor="userEmail" className="text-gray-600  text-lg">
            Your Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
            readOnly
          />
        </div>

        <div className="">
          <label htmlFor="clientEmail" className="text-gray-600  text-lg">
            Client Email:
          </label>
          <input
            type="email"
            name="clientEmail"
            id="clientEmail"
            className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
            readOnly
          />
        </div>
        <div className=" mt-4 flex items-center gap-10">
          <input
            type="submit"
            name=""
            id=""
            value={"SUBMIT"}
            className="w-44 px-4 py-3 mx-auto border-2 border-[#12CD6A]  hover:border-gray-800 cursor-pointer rounded-full text-gray-700 hover:bg-gray-700 hover:text-white font-semibold transition duration-200 ease-in-out "
          />
        </div>
      </div>
    </form>
  );
};

export default ApplyJobForm;
