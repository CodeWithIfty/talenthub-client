import "react-tabs/style/react-tabs.css";
import "../index.css";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../utils/hooks/useAxios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../utils/context/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyBids = () => {
  const pageTitle = `TH | My Bids`;
  const axios = useAxios();
  const { user, SignOutUser } = useContext(authContext);
  const [sortStatus, setSortStatus] = useState();
  console.log(sortStatus);
  const [filteredData, setFilteredData] = useState([]);

  const { data: myBids, refetch } = useQuery({
    queryKey: ["myBids", user.email],
    queryFn: async () => {
      try {
        const res = await axios.get(`/bids?userEmail=${user.email}`);
        return res.data;
      } catch (error) {
        if (error?.response?.status === 401) {
          SignOutUser();
        }
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (sortStatus) {
      const filteredBids = myBids?.filter((bid) => bid?.status === sortStatus);
      setFilteredData(filteredBids);
    } else {
      setFilteredData(myBids);
    }
  }, [sortStatus, myBids]);

  console.log(myBids);
  const handleComplete = async (_id, price) => {
    const updatedStatus = { status: "complete" };
    const toastId = toast.loading("Sending...");
    try {
      axios.put(`/bid/${_id}`, updatedStatus).then((res) => {
        console.log(res.data);
        toast.success(`Congratulations! You earned $${price}`, {
          id: toastId,
        });
        refetch();
      });
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId });

      console.log(err);
    }
  };

  return (
    <div className=" mt-28 ">
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="icon" href={`/path-to-your-favicon.ico`} />
      </Helmet>
      <div className="overflow-x-auto max-w-fit mx-auto  border my-5 ">
        <table className="table ">
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
              <th>
                <select
                  name=""
                  id=""
                  className="bg-transparent"
                  onChange={(e) => setSortStatus(e.target.value)}
                >
                  <option value="">Sort by status</option>
                  <option value="pending">Sort by Pending</option>
                  <option value="In Progress">Sort by In Progress</option>
                  <option value="cancel">Sort by Cancel</option>
                  <option value="complete">Sort by Complete</option>
                </select>
              </th>
              <th></th>
            </tr>
          </thead>
          {myBids?.length === 0 || filteredData?.length === 0 ? (
            <tbody className="text-center text-xl font-bold px-10">
              <tr>
                <td colSpan="5">NO Data Available</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {filteredData?.map(
                ({ _id, jobTitle, deadline, status, price, clientInfo }) => (
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
                            : status === "cancel"
                            ? "bg-red-600 text-white capitalize py-1 px-2  rounded-full font-semibold"
                            : "bg-success text-white py-1 px-2  rounded-full font-semibold"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <th>
                      {status === "pending" ? (
                        <button
                          disabled
                          className="btn btn-ghost btn-xs bg-[#12CD6A] text-white"
                        >
                          Mark as complete
                        </button>
                      ) : status === "complete" ? (
                        <button className="btn btn-ghost btn-xs bg-[#12CD6A] text-white">
                          Earned ${price}
                        </button>
                      ) : status === "cancel" ? (
                        <button
                          disabled
                          className="btn btn-ghost btn-xs bg-[#12CD6A] text-white"
                        >
                          Canceled
                        </button>
                      ) : (
                        <button
                          className="btn btn-ghost btn-xs bg-[#12CD6A] text-white"
                          onClick={() => handleComplete(_id, price)}
                        >
                          Mark as complete
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

export default MyBids;
