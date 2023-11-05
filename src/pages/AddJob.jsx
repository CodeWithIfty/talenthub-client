const AddJob = () => {
  return (
    <div className="mt-24">
      <div className="container mx-auto">
        <form
          method="dialog"
          className="flex flex-col justify-center items-center"
        >
          <div className="p-4 ">
            <h1 className="text-3xl font-semibold text-center">
              Place Your Bid Here
            </h1>
            <p className="text-sm text-center mt-2 text-[#12CD6A]">
              Web Designer at Google inc
            </p>
          </div>

          <div className="flex flex-col  gap-2 p-10 ">
            <div className="mb-3 flex flex-col">
              <label htmlFor="userEmail" className="text-gray-600  text-lg">
                Email:
              </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
              />
            </div>

            <div className="mb-3 flex flex-col">
              <label htmlFor="jobTitle" className="text-gray-600  text-lg">
                Job Title:
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
              />
            </div>

            <div className="flex flex-col">
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

            <div className="flex flex-col">
              <label htmlFor="jobDesc" className="text-gray-600  text-lg">
                Job Description:
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Bio"
                id="jobDesc"
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label htmlFor="jobDesc" className="text-gray-600  text-lg">
                Job Description:
              </label>
              <select
                name=""
                id=" "
                className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-non"
              >
                <option value="">Web Development</option>
                <option value="">Digital Marketing</option>
                <option value="">Graphics Design</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="maxPrice" className="text-gray-600  text-lg">
                Minimum price :
              </label>
              <input
                type="number"
                name="maxPrice"
                id="maxPrice"
                className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="minPrice" className="text-gray-600  text-lg">
                Minimum price :
              </label>
              <input
                type="number"
                name="minPrice"
                id="minPrice"
                className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
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
      </div>
    </div>
  );
};

export default AddJob;
