import HomeCard from "./HomeCard";

const HomeList = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-2">
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>
    </section>
  );
};

export default HomeList;
