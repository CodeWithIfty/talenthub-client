import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const LogInRegistration = () => {
  return (
    <div className="">
      <div className="bg-[#12CD6A]  mt-28 ">
        <Tabs className={"container mx-auto p-10"} defaultIndex={1}>
          <TabList className={"border-none"}>
            <div className="flex items-center gap-5">
              <Tab
                className={
                  " text-5xl uppercase font-bold cursor-pointer border-r-2 px-4 py-2"
                }
              >
                <h1>Registration</h1>
              </Tab>
              <Tab className={" text-5xl uppercase font-bold cursor-pointer "}>
                <h1>LOGIN</h1>
              </Tab>
            </div>
          </TabList>
          <TabPanel>
            <RegistrationForm />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default LogInRegistration;
