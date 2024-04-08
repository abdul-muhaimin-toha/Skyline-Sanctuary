import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { IoMdPricetag, IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PropertyDetailsPage = () => {
  const homes = useLoaderData();
  const { id } = useParams();
  const [targetedHome, setTargetedHome] = useState({});

  const {
    image,
    estate_title,
    facilities,
    location,
    area,
    price,
    segment_name,
    detailed_description,
    status,
    latitude,
    longitude,
  } = targetedHome;

  useEffect(() => {
    const desiredHome = homes.find((home) => home.id == id);
    setTargetedHome(desiredHome);
  }, [homes, id]);

  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>SkyLine Sactuary - Property Details</title>
        </Helmet>
      </HelmetProvider>
      <div className="mx-auto max-w-screen-2xl p-6 py-12">
        <div className="flex flex-col items-start gap-6 lg:flex-row">
          <div className="flex flex-col lg:w-1/2">
            <h4 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
              {estate_title}
            </h4>
            <div className="relative">
              <img
                src={image}
                alt=""
                className="h-96 w-full rounded-md object-cover shadow-2xl"
              />
              <p className="absolute right-4 top-3 rounded bg-primary p-3 text-lg font-bold text-white">
                {segment_name}
              </p>
            </div>
            <p className="mt-8 text-lg font-bold text-primary">Description:</p>
            <p className="mt-2 text-base">{detailed_description}</p>
            <div className="mt-4">
              <p className="flex items-center gap-2 rounded bg-primary px-6 py-3 text-base text-white">
                <FaLocationDot />
                {location}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <p className="rounded bg-secondary px-6 py-3 text-base text-white">
                Status: {status}
              </p>
              <p className="flex items-center gap-2 rounded bg-secondary px-6 py-3 text-base text-white">
                <IoMdPricetag />
                Price: ${price}
              </p>
              <p className="flex items-center gap-2 rounded bg-secondary px-6 py-3 text-base text-white">
                <IoMdHome />
                Area: {area} sq ft
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 italic text-primary md:gap-4">
              {facilities &&
                facilities.map((facility, id) => <p key={id}># {facility}</p>)}
            </div>
          </div>
          <div className="z-0 mt-12 w-full lg:mt-16 lg:w-1/2">
            {latitude && longitude && (
              <MapContainer center={[latitude, longitude]} zoom={15}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]} />
              </MapContainer>
            )}
            <div className="mt-8 flex justify-end">
              <Link
                to={-1}
                className=" rounded-md bg-primary p-3 font-bold text-white transition duration-200 hover:bg-blue-800 md:px-5  md:py-3"
              >
                ← Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsPage;
