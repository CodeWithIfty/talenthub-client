import "react-tabs/style/react-tabs.css";
import "../index.css";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../utils/hooks/useAxios";
import { useContext } from "react";
import { authContext } from "../utils/context/AuthProvider";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

import { Helmet } from "react-helmet";
import "react-step-progress-bar/styles.css";
import { useEffect } from "react";

const BidRequest = () => {
  const pageTitle = `TH | Bid Request`;
  const axios = useAxios();
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

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="container mx-auto mt-28 ">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div
        className="overflow-x-auto   mx-auto border my-5"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="300"
      >
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
              <th className="text-center">Status</th>
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

                  userInfo,
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
                    {status === "pending" ? (
                      <th className="text-center">
                        <span
                          className={`bg-error text-white py-1 capitalize px-6  rounded-full font-bold `}
                        >
                          {status}
                        </span>
                      </th>
                    ) : (
                      <th
                        className="flex justify-center items-center "
                        colSpan="2"
                      >
                        <ul className="steps scale-75 ">
                          {status === "In Progress" ? (
                            <>
                              {" "}
                              <li className="step step-primary mr-9">
                                Pending
                              </li>
                              <li className="step  step-primary">
                                In Progress
                              </li>
                              <li className="step ">Completed</li>
                            </>
                          ) : status === "complete" ? (
                            <>
                              {" "}
                              <li className="step step-success mr-9">
                                Pending
                              </li>
                              <li className="step  step-success">
                                In Progress
                              </li>
                              <li className="step step-success">Completed</li>
                            </>
                          ) : (
                            <span
                              className={`bg-red-600  text-white py-1 capitalize px-16 text-base  rounded-full font-bold `}
                            >
                              {status}
                            </span>
                          )}
                        </ul>
                      </th>
                    )}

                    <th
                      className={`${
                        status === "pending" ? " block " : "hidden"
                      } gap-3 justify-around items-center `}
                    >
                      <button
                        className="btn btn-ghost btn-sm mt-1 mr-5 bg-[#12CD6A] text-white"
                        onClick={() => handleAccept(_id)}
                      >
                        Accept
                      </button>

                      <button
                        className="btn btn-ghost btn-sm mt-1 bg-error text-white"
                        onClick={() => handleCancel(_id)}
                      >
                        Cancel
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

export default BidRequest;
