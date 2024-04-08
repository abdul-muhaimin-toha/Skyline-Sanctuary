import { useState } from "react";
import HomeCard from "./HomeCard";
import PropTypes from "prop-types";

const HomeList = ({ homes }) => {
  const [viewAll, setviewAll] = useState(false);
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-2">
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homes.slice(0, viewAll ? homes.length : 6).map((home) => (
            <HomeCard key={home.id} home={home} />
          ))}
        </div>
        <div className="mb-10 flex justify-center">
          {!viewAll && (
            <button
              onClick={() => setviewAll(!viewAll)}
              className="rounded-md bg-primary px-5 py-3 font-bold text-white transition duration-200 hover:bg-blue-800"
            >
              View All
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

HomeList.propTypes = {
  homes: PropTypes.array.isRequired,
};

export default HomeList;
