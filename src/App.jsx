import Banner from "./components/Banner";
import Footer from "./components/Footer";
import JobSection from "./components/JobSection";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Banner />
        <JobSection />
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
