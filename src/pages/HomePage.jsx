import HeroSection from "../components/HeroSection";
import NewsLetter from "../components/NewsLetter";
import SingleFamilyHomeSection from "../components/SingleFamilyHomeSection";
import { useLoaderData } from "react-router-dom";
import TestimonialSection from "../components/TestimonialSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const homes = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Skyline Sactuary</title>
      </Helmet>
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
