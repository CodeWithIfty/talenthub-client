import { Link } from "react-router-dom";

const MyJobCard = ({ job, handleDelete }) => {
  console.log(job);

  const { _id, jobTitle, deadline, jobDescription, maxPrice, minPrice } =
    job || {};
  return (
    <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
      <div className="w-7/12">
        <h1 className="md:text-xl   font-bold">{jobTitle}</h1>
        <p className="text-gray-500">{jobDescription.substring(0, 150)}...</p>
      </div>

      <div className="flex gap-4 items-center">
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
            to={`/update-job/${_id}`}
            className="px-3 py-1 mr-2 font-semibold bg-[#12CD6A] text-white rounded-full"
          >
            Update
          </Link>
          <button
            className="px-3 py-1 font-semibold bg-error text-white rounded-full"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyJobCard;
