import { useEffect, useRef, useState } from "react";
import SearchBox from "./SearchBox";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  const [bgPosition, setBgPosition] = useState(0);
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.scrollY;
        const bannerPosition = bannerRef.current.offsetTop;
        setBgPosition((bannerPosition - scrollPosition) * 0.2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <section
        ref={bannerRef}
        className="bg-cover bg-center  bg-no-repeat h-[85vh]"
        style={{
          backgroundImage: `url(/assets/images/headerimage1.jpg)`,
          backgroundPositionY: `${bgPosition}px`,
        }}
      >
        <div className="w-full h-full   flex items-center flex-col justify-between gap-3">
          <div className="w-full text-center mt-36">
            <h1
              className="text-6xl font-bold"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Looking For a Job?
            </h1>
            <h6
              className="mt-8 text-2xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <span className="text-success">Join us</span> & Explore thousands
              of jobs
            </h6>
            <div
              className="mt-6 p-2 border-2 border-success text-lg font-semibold w-72 mx-auto rounded-full bg-gray-50"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <p>
                We Have <span className="text-success">59</span> jobs offers for
                you
              </p>
            </div>
          </div>
          <SearchBox />
        </div>
      </section>
    </>
  );
};

export default Banner;
