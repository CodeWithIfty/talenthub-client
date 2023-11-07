import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SearchBox from "../components/SearchBox";
import useAxios from "../utils/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const BrowseJobs = () => {
  const pageTitle = `TH | Browse Jobs`;
  const [category, setCategory] = useState("");
  const axios = useAxios();
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [totalPages, setTotalPages] = useState(1);

  const { data: jobs } = useQuery({
    queryKey: ["jobs", category, page, pageSize],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `/jobs?category=${category}&page=${page}&pageSize=${pageSize}`
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (jobs) {
      setTotalPages(Math.ceil(jobs.totalCount / pageSize));
    }
  }, [jobs]);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="page-numbers ">
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        
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

  return (
    <div className="">
      <div className="bg-[url(/assets/images/bgimage.png)] mt-28 h-44 ">
        <div className="w-full h-full bg-gray-800 p-10 bg-opacity-50 flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-white">Browse Jobs</h1>
          <div className="text-white">
            <p>Total jobs : 59</p>
            <p>Last Posted Time</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <SearchBox />
      </div>

      <div className="container mx-auto mt-8 mb-8 pb-5 border-b">
        <h1 className="text-3xl">Recent Jobs</h1>
        <div className="mt-10 space-y-4">
          {jobs?.result?.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
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
      </div>
    </div>
  );
};

export default BrowseJobs;
