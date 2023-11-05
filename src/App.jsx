import Banner from "./components/Banner";
import JobSection from "./components/JobSection";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Banner />
        <JobSection />
        <div className="h-screen bg-green-400"></div>
        <div className="h-screen bg-green-400">dsgskdfgjnkd</div>
      </MainLayout>
    </>
  );
}

export default App;
