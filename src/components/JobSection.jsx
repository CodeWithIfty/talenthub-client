import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RiArrowDropDownLine } from "react-icons/ri";
import "react-tabs/style/react-tabs.css";
import "../index.css";
import JobCard from "./JobCard";
import useAxios from "../utils/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

const JobSection = () => {
  const [category, setCategory] = useState("") || {};
  const axios = useAxios();

  const { data: jobs } = useQuery({
    queryKey: ["jobs", category],
    queryFn: async () => {
      try {
        const res = await axios.get(`/jobs?category=${category}`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  // console.log(jobs);

  return (
    <div className="container mx-auto mt-10">
      <div className="">
        <Tabs defaultIndex={3}>
          <div className="flex items-center justify-center flex-col lg:flex-row">
            <div className=" flex items-center">
              <h1 className="text-3xl font-bold px-10 py-2 border-r-2 ">
                Recent Jobs
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
                onClick={() => setCategory("graphic-design")}
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
              {jobs?.slice(0, 4).map((job) => (
                <JobCard key={job._id} job={job} />
              ))}

              <div className="flex justify-center ">
                <Link
                  to={"/browse-jobs"}
                  className="bg-[#12CD6A] px-4 py-2 flex items-center  text-white font-semibold border-2 transition ease-in-out duration-150 mt-4 hover:bg-transparent hover:border-2 hover:text-gray-600 rounded-full"
                >
                  See More <RiArrowDropDownLine className="text-3xl" />
                </Link>
              </div>
            </TabPanel>
            <TabPanel className={" space-y-3"}>
              {jobs?.slice(0, 4).map((job) => (
                <JobCard key={job._id} job={job} />
              ))}

              <div className="flex justify-center ">
                <Link
                  to={"/browse-jobs"}
                  className="bg-[#12CD6A] px-4 py-2 flex items-center   text-white font-semibold border-2 transition ease-in-out duration-150 mt-4 hover:bg-transparent hover:border-2 hover:text-gray-600 rounded-full"
                >
                  See More <RiArrowDropDownLine className="text-3xl" />
                </Link>
              </div>
            </TabPanel>
            <TabPanel className={" space-y-3"}>
              {jobs?.slice(0, 4).map((job) => (
                <JobCard key={job._id} job={job} />
              ))}

              <div className="flex justify-center ">
                <Link
                  to={"/browse-jobs"}
                  className="bg-[#12CD6A] px-4 py-2 flex items-center   text-white font-semibold border-2 transition ease-in-out duration-150 mt-4 hover:bg-transparent hover:border-2 hover:text-gray-600 rounded-full"
                >
                  See More <RiArrowDropDownLine className="text-3xl" />
                </Link>
              </div>
            </TabPanel>
            <TabPanel className={" space-y-3"}>
              {jobs?.slice(0, 4).map((job) => (
                <JobCard key={job._id} job={job} />
              ))}

              <div className="flex justify-center ">
                <Link
                  to={"/browse-jobs"}
                  className="bg-[#12CD6A] px-4 py-2 flex items-center   text-white font-semibold border-2 transition ease-in-out duration-150 mt-4 hover:bg-transparent hover:border-2 hover:text-gray-600 rounded-full"
                >
                  See More <RiArrowDropDownLine className="text-3xl" />
                </Link>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default JobSection;
