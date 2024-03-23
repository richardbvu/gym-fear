import Download from "../components/Download";
import Hero from "../components/Hero";
import History from "../components/History";
import Membership from "../components/Membership";
import TrackerAppLoad from "../components/TrackerAppLoad";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Membership />
      <History />
      <Download />
      <TrackerAppLoad />
    </div>
  );
};
export default Home;
