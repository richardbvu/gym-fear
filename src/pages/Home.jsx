import Hero from "../components/Hero";
import History from "../components/History";
import Join from "../components/Join";
import Membership from "../components/Membership";

export const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Join /> */}
      <Membership />
      <History />
    </div>
  );
};
export default Home;
