import HeroSection from "../components/HeroSection";
import NewsLetter from "../components/NewsLetter";
import SingleFamilyHomeSection from "../components/SingleFamilyHomeSection";
import { useLoaderData } from "react-router-dom";
import TestimonialSection from "../components/TestimonialSection";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  const homes = useLoaderData();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Skyline Sactuary</title>
        </Helmet>
      </HelmetProvider>
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
