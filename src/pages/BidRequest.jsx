import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../index.css";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../utils/hooks/useAxios";
import { useContext, useState } from "react";
import { authContext } from "../utils/context/AuthProvider";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const BidRequest = () => {
  const location = useLocation();
  const pageTitle = `Talenthub | Bid Request`;
  const axios = useAxios();
  const [category, setCategory] = useState("") || {};
  const { user, SignOutUser } = useContext(authContext);

  const { data: myBids, refetch } = useQuery({
    queryKey: ["myBids", user],
    queryFn: async () => {
      try {
        const res = await axios.get(`/bids?clientEmail=${user.email}`);
        return res.data;
      } catch (error) {
        if (error?.response?.status === 401) {
          SignOutUser();
        }
        console.log(error.response.status);
      }
    },
  });

  console.log(myBids);

  const handleAccept = async (_id) => {
    const updatedStatus = { status: "In Progress" };
    const toastId = toast.loading("Accepting...");
    try {
      axios.put(`/bid/${_id}`, updatedStatus).then((res) => {
        console.log(res.data);
        toast.success("Job Accepted!", { id: toastId });
        refetch();
      });
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId });
      console.log(err);
    }
  };

  const handleCancel = (_id) => {
    const updatedStatus = { status: "cancel" };
    const toastId = toast.loading("Cancelling...");
    try {
      axios.put(`/bid/${_id}`, updatedStatus).then((res) => {
        console.log(res.data);
        toast.success("Job Canceled!", { id: toastId });
        refetch();
      });
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId });
      console.log(err);
    }
  };
  return (
    <div className="container mx-auto mt-28 ">
      <Helmet>
        <title>{pageTitle}</title>
        {/* <link rel="icon" href={`/path-to-your-favicon.ico`} /> */}
      </Helmet>
      ;
      <div className="overflow-x-auto container mx-auto border my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Client Info </th>
              <th>Job Details</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          {myBids?.length === 0 ? (
            <tbody className="text-center text-xl font-bold px-10">
              <tr>
                <td colSpan="5">NO Data Available</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {/* row 1 */}
              {myBids?.map(
                ({
                  _id,
                  jobTitle,
                  deadline,
                  status,
                  price,
                  jobId,
                  userInfo,
                  clientInfo,
                }) => (
                  <tr key={_id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={userInfo?.photoURL}
                              alt={userInfo?.displayName}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {userInfo?.displayName}
                          </div>
                          <div className="text-sm italic opacity-50">
                            {userInfo?.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h1 className="text-base  font-bold mb-1">{jobTitle}</h1>
                      <span className="badge badge-ghost badge-sm">
                        Price: ${price} | DeadLine: {deadline}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`${
                          status === "pending"
                            ? "bg-error text-white py-1 capitalize px-2  rounded-full font-semibold"
                            : status === "cancel"
                            ? "bg-red-600 text-white capitalize py-1 px-2  rounded-full font-semibold"
                            : "bg-error text-white py-1 capitalize px-2  rounded-full font-semibold"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <th className="flex gap-3 justify-around items-center ">
                      {status === "pending" ? (
                        <button
                          className="btn btn-ghost btn-xs bg-[#12CD6A] text-white"
                          onClick={() => handleAccept(_id)}
                        >
                          Accept
                        </button>
                      ) : status === "complete" ? (
                        <button
                          className="btn btn-ghost btn-xs bg-[#12CD6A] text-white"
                          disabled
                        >
                          Accepted
                        </button>
                      ) : status === "cancel" ? (
                        <button
                          className="btn btn-ghost btn-xs bg-[#12CD6A] text-white"
                          disabled
                        >
                          Canceled
                        </button>
                      ) : (
                        <button
                          className="btn btn-ghost btn-xs bg-[#12CD6A] text-white"
                          // onClick={() => handleAccept(_id)}
                        >
                          Accepted
                        </button>
                      )}

                      {status === "cancel" ? (
                        <button
                          className="btn btn-ghost btn-xs bg-error text-white"
                          disabled
                        >
                          Canceled
                        </button>
                      ) : status === "complete" ? (
                        <button
                          className="btn btn-ghost btn-xs bg-error text-white"
                          disabled
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          className="btn btn-ghost btn-xs bg-error text-white"
                          onClick={() => handleCancel(_id)}
                        >
                          Cancel
                        </button>
                      )}
                    </th>
                  </tr>
                )
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default BidRequest;
