import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className=" flex min-h-[calc(100vh-305px)] items-center justify-center bg-cover bg-center ">
      <div className="mx-auto max-w-screen-2xl p-1 lg:py-8">
        <div className=" flex flex-col items-center justify-center py-28 ">
          <h2 className="play-fair-display mb-4 text-center text-3xl font-bold text-primary md:text-5xl md:font-extrabold">
            Page Not Found
          </h2>
          <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
            <Link
              to="/"
              className=" btn  min-w-52 rounded-md border-none bg-primary px-4 text-white hover:bg-blue-700 md:flex "
            >
              Go back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
