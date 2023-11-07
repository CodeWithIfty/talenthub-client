import { useContext, useEffect, useState } from "react";
import { authContext } from "../utils/context/AuthProvider";
import useAxios from "../utils/hooks/useAxios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const UpdateJob = () => {
  const location = useLocation();
  const pageTitle = `Talenthub | ${location.pathname.replace("/", "")}`;
  const { _id } = useParams();
  const axios = useAxios();
  const { user } = useContext(authContext);

  const {
    data: job,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["updatejobs"],
    queryFn: async () => {
      try {
        const res = await axios.get(`/job/${_id}`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // console.log(job);
  const { email, displayName, photoURL, emailVerified } = user;
  const userInfo = { email, displayName, photoURL, emailVerified };

  const [formData, setFormData] = useState({
    clientInfo: userInfo,
    jobTitle: "",
    deadline: "",
    jobDescription: "",
    category: "",
    maxPrice: "",
    minPrice: "",
  });

  useEffect(() => {
    if (!isLoading && !isFetching && job) {
      setFormData({
        ...userInfo,
        jobTitle: job.jobTitle,
        deadline: job.deadline,
        jobDescription: job.jobDescription,
        category: job.category,
        maxPrice: job.maxPrice,
        minPrice: job.minPrice,
      });
    }
  }, [job]);

  const handleUpdateJob = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in ...");
    try {
      axios.put(`/job/${_id}`, formData).then((res) => {
        // console.log(res.data);
        toast.success("Job Updated!", { id: toastId });
      });
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId });
      console.log(err);
    }
    // console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="mt-28">
      <Helmet>
        <title>{pageTitle}</title>
        {/* <link rel="icon" href={`/path-to-your-favicon.ico`} /> */}
      </Helmet>
      ;
      {isFetching || isLoading ? (
        <span className="loading loading-ring loading-md scale-150"></span>
      ) : (
        <form
          method="dialog"
          className="flex flex-col justify-center items-center"
          onSubmit={handleUpdateJob}
        >
          <div className="p-4 ">
            <h1 className="text-3xl font-semibold text-center uppercase">
              UPADTE job from here
            </h1>
            <p className="text-sm text-center mt-2 text-[#12CD6A]">
              Fill Up The Form Property
            </p>
          </div>

          <div className="flex flex-col  gap-2  ">
            <div className="mb-3 flex flex-col">
              <label htmlFor="userEmail" className="text-gray-600  text-lg">
                Email:
              </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                value={user?.email}
                className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
                required
                readOnly
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
                value={formData.jobTitle}
                onChange={handleInputChange}
                required
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
                value={formData.deadline}
                onChange={handleInputChange}
                required
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
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label htmlFor="jobDesc" className="text-gray-600  text-lg">
                Job Category:
              </label>
              <select
                name="category"
                id="category"
                className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-non"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Category</option>
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="graphics-design">Graphics Design</option>
              </select>
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
                value={formData.minPrice}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="maxPrice" className="text-gray-600  text-lg">
                Maximum price :
              </label>
              <input
                type="number"
                name="maxPrice"
                id="maxPrice"
                className="w-96 p-3  rounded-lg bg-gray-50 border border-gray-400 outline-none"
                value={formData.maxPrice}
                onChange={handleInputChange}
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
      )}
    </div>
  );
};

export default UpdateJob;
