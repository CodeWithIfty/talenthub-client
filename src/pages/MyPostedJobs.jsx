import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../index.css";
import MyJobCard from "../components/MyJobCard";
import { useContext, useEffect, useState } from "react";
import useAxios from "../utils/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { authContext } from "../utils/context/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyPostedJobs = () => {
  const pageTitle = `TH | My Posted Jobs`;
  const { user, SignOutUser } = useContext(authContext);
  const [category, setCategory] = useState("") || {};
  const axios = useAxios();
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [totalPages, setTotalPages] = useState(1);

  const { data: myJobs, refetch } = useQuery({
    queryKey: ["myjobs", category, page, pageSize],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `/jobs?category=${category}&email=${user.email}&page=${page}&pageSize=${pageSize}`
        );
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
    if (myJobs) {
      setTotalPages(Math.ceil(myJobs.totalCount / pageSize));
    }
  }, [myJobs]);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="page-numbers ">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={
              page === pageNumber ? "active btn bg-[#12CD6A]" : "btn btn-ghost"
            }
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  console.log(myJobs);
  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Do you really want to delete this user?",
      showCancelButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/job/${_id}`)
          .then((res) => {
            Swal.fire("Deleted!", "", "success");
            // console.log(res);
            refetch();
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            Swal.fire("Error deleting user", "", "error");
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  // console.log(myJobs);
  return (
    <div className="container mx-auto mt-28 ">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="">
        <Tabs defaultIndex={3}>
          <div className="flex items-center justify-center flex-col lg:flex-row">
            <div className=" flex items-center">
              <h1 className="text-3xl font-bold px-10 py-2 border-r-2 ">
                My Posted Jobs
              </h1>
              <h2 className="text-sm  py-2 pl-10 pr-24">
                Popular <br />
                <span className="font-bold">Category</span>
              </h2>
            </div>
            <TabList
              className={
                "flex gap-3 justify-center items-center flex-wrap font-semibold text-gray-600 lg:mt-0 mt-8"
              }
            >
              <Tab
                className={"border  w-44 text-center p-2 rounded-lg"}
                onClick={() => setCategory("web-development")}
              >
                Web Development
              </Tab>
              <Tab
                className={"border  w-44 text-center p-2 rounded-lg"}
                onClick={() => setCategory("digital-marketing")}
              >
                Digital Marketing
              </Tab>
              <Tab
                className={"border  w-44 text-center p-2 rounded-lg"}
                onClick={() => setCategory("graphics-design")}
              >
                Graphics Design
              </Tab>
              <Tab
                className={"border  w-20 text-center p-2 rounded-lg"}
                onClick={() => setCategory("")}
              >
                All
              </Tab>
            </TabList>
          </div>

          <div className="lg:p-20 md:p-10 p-2">
            <TabPanel className={" space-y-3"}>
              {myJobs?.result.map((job) => (
                <MyJobCard
                  key={job._id}
                  job={job}
                  handleDelete={handleDelete}
                />
              ))}
            </TabPanel>
            <TabPanel className={" space-y-3"}>
              {myJobs?.result.map((job) => (
                <MyJobCard
                  key={job._id}
                  job={job}
                  handleDelete={handleDelete}
                />
              ))}
            </TabPanel>

            <TabPanel className={" space-y-3"}>
              {myJobs?.result.map((job) => (
                <MyJobCard
                  key={job._id}
                  job={job}
                  handleDelete={handleDelete}
                />
              ))}
            </TabPanel>
            <TabPanel className={" space-y-3"}>
              {myJobs?.result.map((job) => (
                <MyJobCard
                  key={job._id}
                  job={job}
                  handleDelete={handleDelete}
                />
              ))}
            </TabPanel>
            {myJobs?.result.length === 0 ? (
              <span className="text-2xl font-semibold flex justify-center">
                No Jobs Avaiable
              </span>
            ) : (
              <div className="pagination-controls flex justify-center items-center gap-3 my-5">
                <button
                  onClick={() => handlePageClick(page - 1)}
                  disabled={page === 1}
                  className="btn bg-[#12CD6A] text-white"
                >
                  Previous Page
                </button>
                {renderPageNumbers()}
                <button
                  onClick={() => handlePageClick(page + 1)}
                  disabled={page === totalPages}
                  className="btn bg-[#12CD6A] text-white"
                >
                  Next Page
                </button>
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default MyPostedJobs;
