import HomeList from "./HomeList";
import SectionHeader from "./SectionHeader";

const SingleFamilyHomeSection = ({ homes }) => {
  return (
    <section>
      <SectionHeader
        title="Family Homes"
        subTitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quis."
      />
      <HomeList homes={homes} />
    </section>
  );
};

export default SingleFamilyHomeSection;
