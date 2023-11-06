import { useParams } from "react-router-dom";
import ApplyJobForm from "../components/ApplyJobForm";
import useAxios from "../utils/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { authContext } from "../utils/context/AuthProvider";

const JobDetails = () => {
  const { _id } = useParams();
  // console.log(_id);
  const axios = useAxios();
  const { user } = useContext(authContext);

  const {
    data: job,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["jobs", _id],
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
  const {
    jobTitle,
    deadline,
    jobDescription,
    minPrice,
    maxPrice,
    clientInfo,
    category,
  } = job || {};

  const isDeadlineExpired = (deadline) => {
    const currentDate = new Date();
    const jobDeadline = new Date(deadline);

    return currentDate > jobDeadline;
  };
  const [isBiddingDisabled, setIsBiddingDisabled] = useState(
    isDeadlineExpired(deadline)
  );

  // console.log(isBiddingDisabled);
  return (
    <div>
      <div className="mt-24 bg-[#12CD6A] p-10">
        <div className="container mx-auto">
          <h1 className="text-4xl text-white">Job Details </h1>
        </div>
      </div>

      <div className="border-b-2">
        <div className="w-7/12 mx-auto flex p-5 justify-between">
          <div className="flex items-center gap-2">
            <div className=" ">
              <img
                src={`${
                  clientInfo?.photoURL
                    ? clientInfo?.photoURL
                    : "https://i.ibb.co/rHzPb0S/icon-256x256.png"
                }`}
                alt={clientInfo?.displayName}
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="">
              <h1 className="font-bold text-xl">{clientInfo?.displayName} </h1>
              <p className="text-sm italic">{clientInfo?.email}</p>
            </div>
          </div>
          <div className="">
            <p className="font-bold">Price range</p>
            <h2>
              ${minPrice} - ${maxPrice}
            </h2>
          </div>
          <div className="">
            <p className="font-bold">Deadline</p>
            <h2>{deadline}</h2>
          </div>
          <div className="">
            <p className="font-bold">Category</p>
            <h2>{category}</h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex ">
        <div className="w-10/12  p-10">
          <div className="">
            <h1 className="text-5xl font-semibold mb-3">{jobTitle}</h1>
            <p className="w-10/12 ml-5">{jobDescription}</p>
          </div>
        </div>
        <div className="w-2/12 bg-gray-600 bg-opacity-10 rounded-lg">
          {user.email === clientInfo?.email ? (
            <div className="p-10 flex flex-col justify-center items-center">
              <input
                readOnly
                disabled
                value={"You Can't Bid"}
                className="py-2 text-center border-2 border-success  rounded-full font-semibold  transition duration-200 ease-in-out"
              />
            </div>
          ) : (
            <div className="p-10 flex flex-col justify-center items-center">
              <button
                disabled={isBiddingDisabled}
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="py-2 px-4 border-2 border-success  rounded-full hover:bg-[#12CD6A] hover:shadow-xl font-semibold hover:text-white transition duration-200 ease-in-out"
              >
                PLACE YOUR BID
              </button>
              <p className="text-sm text-center mt-2 italic">
                {isBiddingDisabled
                  ? "Bidding has expired"
                  : "Click here to open bid form"}
              </p>
            </div>
          )}
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <ApplyJobForm job={job} />
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
