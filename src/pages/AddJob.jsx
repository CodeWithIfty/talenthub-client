import JobCard from "../components/JobCard";
import SearchBox from "../components/SearchBox";

const AddJob = () => {
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
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default AddJob;
