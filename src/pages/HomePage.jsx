import HeroSection from "../components/HeroSection";
import SingleFamilyHomeSection from "../components/SingleFamilyHomeSection";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const homes = useLoaderData();
  return (
    <>
      <HeroSection />
      <SingleFamilyHomeSection homes={homes} />
    </>
  );
};

export default HomePage;

export const loadHomeData = async () => {
  const response = await fetch("/homes.json");
  return response.json();
};
