import { BiSearch } from "react-icons/bi";
const Banner = () => {
  return (
    <>
      <section className=" bg-[url(/assets/images/headerimage1.jpg)] bg-cover bg-center  bg-no-repeat h-[85vh]">
        <div className="w-full h-full bg-gray-800 bg-opacity-50">
          <div className="  w-full h-full mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex flex-col lg:flex-row gap-10  items-center lg:px-8 justify-around ">

            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                Let us find your
                <strong className="block font-extrabold text-rose-700">
                  Forever Home.
                </strong>
              </h1>
              <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-96  ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search  job..."
                  className="w-full p-4 rounded-xl bg-white"
                />
              </div>
              <div className="p-4 border-2 rounded-lg text-white bg-success border-success outline-none">
                <BiSearch />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
