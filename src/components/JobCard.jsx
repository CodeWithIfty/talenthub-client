import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const { _id, jobTitle, deadline, jobDescription, maxPrice, minPrice } = job;
  return (
    <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
      <div className="w-7/12">
        <h1 className="md:text-xl   font-bold">{jobTitle}</h1>
        <p className="text-gray-500">{jobDescription?.substring(0, 150)}...</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="">
          <h1 className="font-bold  text-gray-700">
            ${minPrice}-${maxPrice} an hour
          </h1>
          <h2>
            <span className="font-bold text-sm">
              DeadLine: <span className="text-gray-500">{deadline}</span>
            </span>{" "}
          </h2>
        </div>
        <div className="">
          <Link
            className="px-3 py-1 font-semibold bg-[#12CD6A] text-white rounded-full"
            to={`/job-details/${_id}`}
          >
            Bid Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
