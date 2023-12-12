import Download from "../components/Download";
import Hero from "../components/Hero";
import History from "../components/History";
import Join from "../components/Join";
import Membership from "../components/Membership";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Membership />
      <History />
      <Download />
    </div>
  );
};
export default Home;
