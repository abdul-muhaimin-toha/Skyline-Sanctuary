import HomeList from "./HomeList";
import SectionHeader from "./SectionHeader";
import PropTypes from "prop-types";

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

SingleFamilyHomeSection.propTypes = {
  homes: PropTypes.array.isRequired,
};

export default SingleFamilyHomeSection;
