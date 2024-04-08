import HeroSection from "../components/HeroSection";
import NewsLetter from "../components/NewsLetter";
import SingleFamilyHomeSection from "../components/SingleFamilyHomeSection";
import { useLoaderData } from "react-router-dom";
import TestimonialSection from "../components/TestimonialSection";

const HomePage = () => {
  const homes = useLoaderData();
  return (
    <>
      <HeroSection />
      <SingleFamilyHomeSection homes={homes} />
      <TestimonialSection />
      <NewsLetter />
    </>
  );
};

export default HomePage;

export const loadHomeData = async () => {
  const response = await fetch("/homes.json");
  return response.json();
};
