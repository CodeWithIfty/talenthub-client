const JobCard = () => {
  return (
    <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
      <div className="w-7/12">
        <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
        <p className="text-gray-500">Photoshop, CSS, Java Script, Sketch</p>
      </div>

      <div className="flex gap-4 items-center">
        <div className="">
          <h1 className="font-bold md:text-lg text-gray-700">
            $10-$12 an hour
          </h1>
          <h2>
            <span className="font-bold text-sm">
              DeadLine: <span className="text-gray-500">2 days</span>
            </span>{" "}
          </h2>
        </div>
        <div className="">
          <button className="px-3 py-1 font-semibold bg-[#12CD6A] text-white rounded-full">
            Bid Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
