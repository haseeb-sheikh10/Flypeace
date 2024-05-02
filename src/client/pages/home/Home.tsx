import { FC } from "react";
import BannerSection from "./components/BannerSection";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <BannerSection />
    </>
  );
};

export default Home;
