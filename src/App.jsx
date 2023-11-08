import Banner from "./components/Banner";
import JobSection from "./components/JobSection";

import SiteStatsSection from "./components/SiteStatsSection";
import TestomonialSection from "./components/TestomonialSection";
import "./index.css";

function App() {

  return (
    <div>
      <Banner data-aos="fade-right" />
      <JobSection />
      <SiteStatsSection />
      <TestomonialSection />
    </div>
  );
}

export default App;
