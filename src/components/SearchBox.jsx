import { useState } from "react";
import { FaBriefcase, FaLocationArrow, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ category, keyword, location }) => {
  const navigate = useNavigate();
  const [searchCategory, setSearchCategory] = useState();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = () => {
    navigate("/browse-jobs", {
      state: {
        category: searchCategory,
        keyword: searchKeyword,
        location: searchLocation,
      },
    });
  };

  return (
    <div className="w-full  p-4 bg-[#12CD6A] text-center mx-auto ">
      <div className=" container mx-auto flex justify-around lg:flex-row flex-col items-center lg:items-start">
        <div className=" flex flex-col lg:items-start ">
          <select
            name=""
            id=""
            onChange={(e) => setSearchCategory(e.target.value)}
            defaultValue={category}
            className="p-4 w-[300px] flex rounded-lg text-gray-600 bg-white outline-none mt-2 font-semibold"
          >
            <option value="">Select Category</option>
            <option value="web-development">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="graphics-design">Graphics Design</option>
          </select>
          <span className="text-white ml-4 lg:mt-3">e.g. Finance</span>
        </div>

        <div className="  flex flex-col lg:items-start ">
          <div className="flex items-center">
            <input
              type="text"
              name=""
              defaultValue={keyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="p-4 xl:w-[500px] lg:w-[300px] w-[400px]  flex rounded-lg px-6 bg-white  mt-2 text-black placeholder-gray-600 font-semibold"
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
              defaultValue={location}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="p-4 xl:w-[300px] w-[250px]  flex rounded-lg px-6 bg-white  mt-2 text-black placeholder-gray-600 font-semibold"
              placeholder="Location"
            />
            <FaLocationArrow className="text-xl text-[#12CD6A] -ml-10 mt-2" />
          </div>
          <span className="text-white ml-4 lg:mt-3">e.g. New York</span>
        </div>

        <div className="flex flex-col items-start mt-2 ">
          <button
            onClick={handleSearch}
            type="submit"
            className=" p-2 w-14 h-14 flex items-center justify-center rounded-lg border-2 bg-[#12CD6A] hover:bg-[#0EAD58] text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaSearch className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
