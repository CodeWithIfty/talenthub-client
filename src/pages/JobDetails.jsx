import ApplyJobForm from "../components/ApplyJobForm";

const JobDetails = () => {
  return (
    <div>
      <div className="mt-24 bg-[#12CD6A] p-10">
        <div className="container mx-auto">
          <h1 className="text-4xl text-white">Job Details </h1>
        </div>
      </div>

      <div className="border-b-2">
        <div className="w-7/12 mx-auto flex p-5 justify-between">
          <div className="">
            <h1>Ascend Consulting</h1>
          </div>
          <div className="">
            <p>Sallary</p>
            <h2>£25,000 - £30,000</h2>
          </div>
          <div className="">
            <p>Hours</p>
            <h2>44h / week</h2>
          </div>
          <div className="">
            <p>Locations</p>
            <h2>West London</h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex ">
        <div className="w-10/12  p-10">
          <div className="">
            <h1 className="text-5xl font-semibold mb-3">Google INC</h1>
            <p className="w-10/12 ml-5">
              You will help Google build next-generation web applications like
              Gmail, Google Docs, Google Analytics, and the Google eBookstore
              and eBook readers. As a Front End Engineer at Google, you will
              specialize in building responsive and elegant web UIs with AJAX
              and similar technologies. You may design or work on frameworks for
              building scalable frontend applications. We are looking for
              engineers who are passionate about and have experience building
              leading-edge user experience, including dynamic consumer
              experiences.
            </p>
          </div>
          <div className="">
            <h1 className="text-3xl mt-5 font-semibold">Good to have:</h1>
            <ul className="list-disc ml-10">
              <li>Wordpress</li>
              <li>Wordpress</li>
              <li>Wordpress</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
        <div className="w-2/12">
          <div className="p-10 ">
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="py-2 px-4 border-2 border-success rounded-full hover:bg-[#12CD6A] hover:shadow-xl font-semibold hover:text-white transition duration-200 ease-in-out"
            >
              PLACE YOUR BID
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <ApplyJobForm />
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
