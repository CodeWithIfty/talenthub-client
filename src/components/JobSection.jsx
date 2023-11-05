import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../index.css";
const JobSection = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="">
        <Tabs>
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
              <Tab className={"border  w-44 text-center p-2 rounded-lg"}>
                Web Development
              </Tab>
              <Tab className={"border  w-44 text-center p-2 rounded-lg"}>
                Digital Marketing
              </Tab>
              <Tab className={"border  w-44 text-center p-2 rounded-lg"}>
                Graphics Design
              </Tab>
              <Tab className={"border  w-20 text-center p-2 rounded-lg"}>
                All
              </Tab>
            </TabList>
          </div>

          <div className="lg:p-20 md:p-10 p-2">
            <TabPanel className={" space-y-3"}>
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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

              <div className="flex justify-center ">
                <button className="bg-[#12CD6A] px-4 py-2  text-white font-semibold border-2 transition ease-in-out duration-150 mt-4 hover:bg-transparent hover:border-2 hover:text-gray-600 rounded-full">
                  See More
                </button>
              </div>
            </TabPanel>
            <TabPanel className={" space-y-3"}>
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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

              <div className="flex justify-center ">
                <button className="bg-[#12CD6A] px-4 py-2  text-white font-semibold border-2 transition ease-in-out duration-150 mt-4 hover:bg-transparent hover:border-2 hover:text-gray-600 rounded-full">
                  See More
                </button>
              </div>
            </TabPanel>
            <TabPanel className={" space-y-3"}>
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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

              <div className="flex justify-center ">
                <button className="bg-[#12CD6A] px-4 py-2  text-white font-semibold border-2 transition ease-in-out duration-150 mt-4 hover:bg-transparent hover:border-2 hover:text-gray-600 rounded-full">
                  See More
                </button>
              </div>
            </TabPanel>
            <TabPanel className={" space-y-3"}>
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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
              <div className="border p-8 rounded-md lg:w-10/12  mx-auto flex justify-between">
                <div className="w-7/12">
                  <h1 className="md:text-xl   font-bold">Senior UX Designer</h1>
                  <p className="text-gray-500">
                    Photoshop, CSS, Java Script, Sketch
                  </p>
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

              <div className="flex justify-center ">
                <button className="bg-[#12CD6A] px-4 py-2  text-white font-semibold border-2 transition ease-in-out duration-150 mt-4 hover:bg-transparent hover:border-2 hover:text-gray-600 rounded-full">
                  See More
                </button>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default JobSection;
