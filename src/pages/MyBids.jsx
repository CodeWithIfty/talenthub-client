import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../index.css";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../utils/hooks/useAxios";
import { useContext, useState } from "react";
import { authContext } from "../utils/context/AuthProvider";

const MyBids = () => {
  const axios = useAxios();
  const [category, setCategory] = useState("") || {};
  const { user } = useContext(authContext);

  const { data: myBids } = useQuery({
    queryKey: ["myBids", user],
    queryFn: async () => {
      try {
        const res = await axios.get(`/bids?userEmail=${user.email}`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  console.log(myBids);

  return (
    <div className="container mx-auto mt-28 ">
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
                              src={clientInfo?.photoURL}
                              alt={clientInfo?.displayName}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {clientInfo?.displayName}
                          </div>
                          <div className="text-sm italic opacity-50">
                            {clientInfo?.email}
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
                            ? "bg-error text-white py-1 px-2  rounded-full font-semibold"
                            : ""
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <th>
                      <button
                        disabled
                        className="btn btn-ghost btn-xs bg-[#12CD6A] text-white"
                      >
                        Mark as complete
                      </button>
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

export default MyBids;
