import HomeList from "./HomeList";
import SectionHeader from "./SectionHeader";

const SingleFamilyHomeSection = ({ homes }) => {
  return (
    <section>
      <SectionHeader
        title="Explore Our Property"
        subTitle="Unlock the Door to Your Dream Home: Explore Our Premier Real Estate Listings Today and Start Your Journey to Homeownership"
      />
      <HomeList homes={homes} />
    </section>
  );
};

export default SingleFamilyHomeSection;
