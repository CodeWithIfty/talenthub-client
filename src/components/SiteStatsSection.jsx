const SiteStatsSection = () => {
  return (
    <div className=" ">
      <div className=" flex  h-full">
        <div className="lg:w-8/12 h-full bg-[#12CD6A]">
          <div className="shadow-xl py-7">
            <div className="lg:w-7/12 w-10/12 mx-auto">
              <h1 className="text-5xl font-semibold text-white mb-3">
                DeximJobs site stats
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi.
              </p>
            </div>
          </div>
          <div className="xl:w-7/12 lg:w-8/12 w-10/12 mx-auto p-4 ">
            <div className="my-5 flex flex-col md:flex-row  items-center md:items-start justify-between">
              <div className="w-44 text-center  md:border-r">
                <h1 className="text-5xl font-bold text-white mb-1">15k</h1>
                <p className="text-white">Job Offers</p>
              </div>
              <div className="w-44 text-center md:border-r">
                <h1 className="text-5xl font-bold text-white mb-1">4982</h1>
                <p className="text-white">Members</p>
              </div>
              <div className="w-44 text-center md:border-r">
                <h1 className="text-5xl font-bold text-white mb-1">768</h1>
                <p className="text-white">Resume Posted</p>
              </div>
              <div className="w-44 text-center ">
                <h1 className="text-5xl font-bold text-white mb-1">90%</h1>
                <p className="text-white">Client who Rehier</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url(/assets/images/blusectionimage.png)] bg-cover w-5/12 lg:block hidden"></div>
      </div>
    </div>
  );
};

export default SiteStatsSection;
