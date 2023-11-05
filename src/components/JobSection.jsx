import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../index.css";
const JobSection = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="">
        <Tabs>
          <div className="flex items-center">
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
                "flex gap-3 items-center flex-wrap font-semibold text-gray-600"
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

          <div className="p-20">
            <TabPanel>
              <div className="border p-6 rounded-md w-10/12 mx-auto flex ">
                <img src="/assets/images/company-logo.png" alt="" />
                <div className="">
                  <h1>Senior UX Designer</h1>
                  <p>Photoshop, CSS, Java Script</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default JobSection;
