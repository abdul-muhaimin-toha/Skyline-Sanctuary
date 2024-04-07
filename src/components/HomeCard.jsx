import homeCover from "../assets/hero-banner-4.jpg";
import { IoMdPricetag, IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const HomeCard = () => {
  return (
    <div className=" relative rounded-xl bg-slate-100 p-3 shadow-lg">
      <img
        src={homeCover}
        alt="home Cover"
        className="h-48 w-full rounded-t-xl object-cover"
      />
      <div className="absolute right-0 top-2 flex w-full justify-between shadow-xl">
        <p className="absolute left-6 top-5 min-w-20 rounded-full bg-primary px-3 py-1 text-center text-sm font-bold text-white">
          Sale
        </p>
        <p className="absolute right-6 top-5 min-w-32 rounded-full bg-primary px-3 py-1 text-center text-sm font-bold text-white">
          Family Homes
        </p>
      </div>
      <div className=" rounded-b-xl bg-white p-6">
        <h3 className="pb-3 text-2xl font-bold text-primary">
          Modern Family Home
        </h3>
        <p className="text-sm font-semibold">
          A beautifully designed modern family home offering spacious interiors
          and stunning views.
        </p>
        <div className="mt-4 flex">
          <p className="rounded-full bg-secondary px-3 py-1 text-base text-white">
            Status: <span className="ml-2 font-bold">Sale</span>
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-2">
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-1 text-lg font-bold text-secondary">
              <IoMdPricetag />
              Price:
            </p>
            <p className="text-lg font-bold text-primary">$ 1000</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-1 text-lg font-bold text-secondary">
              <IoMdHome />
              Price:
            </p>
            <p className="text-lg font-bold text-primary">$ 1000</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-1 text-lg font-bold text-primary">
          <FaLocationDot className="text-secondary" />
          <p>Los Angeles, California</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 p-2 text-sm font-bold italic">
          <p>#4 bedrooms</p>
          <p>#4 bedrooms</p>
          <p>#4 bedrooms</p>
          <p>#4 bedrooms</p>
        </div>
        <button className="mt-4 w-full rounded-md bg-primary p-3 text-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
