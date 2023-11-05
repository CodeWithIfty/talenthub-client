import { FaBriefcase, FaLocationArrow, FaSearch } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <section className=" bg-[url(/assets/images/headerimage1.jpg)] bg-cover bg-center  bg-no-repeat h-[85vh]">
        <div className="w-full h-full   flex items-center flex-col justify-between gap-3">
          <div className="w-full text-center mt-36">
            <h1 className="text-6xl font-bold">Looking For a Job?</h1>
            <h6 className="mt-8 text-2xl">
              <span className="text-success">Join us</span> & Explore thousands
              of jobs
            </h6>
            <div className="mt-6 p-2 border-2 border-success text-lg font-semibold w-72 mx-auto rounded-full bg-gray-50">
              <p>
                We Have <span className="text-success">59</span> jobs offers for
                you
              </p>
            </div>
          </div>
          <div className="w-full  p-4 bg-[#12CD6A] text-center mx-auto ">
            <div className=" container mx-auto flex justify-around lg:flex-row flex-col items-center lg:items-start">
              <div className=" flex flex-col lg:items-start ">
                <select
                  name=""
                  id=""
                  className="p-4 w-[300px] flex rounded-lg text-gray-600 bg-white outline-none mt-2 font-semibold"
                >
                  <option value="">Web Development</option>
                  <option value="">Digital Marketing</option>
                  <option value="">Graphics Design</option>
                </select>
                <span className="text-white ml-4 lg:mt-3">e.g. Finance</span>
              </div>

              <div className="  flex flex-col lg:items-start ">
                <div className="flex items-center">
                  <input
                    type="text"
                    name=""
                    id=" "
                    className="p-4 xl::w-[500px] lg:w-[300px] w-[400px]  flex rounded-lg px-6 bg-white outline-none mt-2 text-black placeholder-gray-600 font-semibold"
                    placeholder="keyword, job title or skill"
                  />
                  <FaBriefcase className="text-2xl text-[#12CD6A] -ml-10 mt-2" />
                </div>
                <span className="text-white ml-4 lg:mt-3">e.g. Designer</span>
              </div>

              <div className="  flex flex-col lg:items-start ">
                <div className="flex items-center">
                  <input
                    type="text"
                    name=""
                    id=" "
                    className="p-4 xl:w-[300px] w-[250px]  flex rounded-lg px-6 bg-white outline-none mt-2 text-black placeholder-gray-600 font-semibold"
                    placeholder="keyword, job title or skill"
                  />
                  <FaLocationArrow className="text-xl text-[#12CD6A] -ml-10 mt-2" />
                </div>
                <span className="text-white ml-4 lg:mt-3">e.g. Designer</span>
              </div>

              <div className="flex flex-col items-start mt-2">
                <button
                  type="submit"
                  className="p-2 w-14 h-14 flex items-center justify-center rounded-lg border-2 bg-[#12CD6A] hover:bg-[#0EAD58] text-white transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaSearch className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
