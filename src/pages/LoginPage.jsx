import { Link } from "react-router-dom";
import { FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  return (
    <section className="bg-hero-slider-2 bg-cover">
      <div className="bg-gradient-to-b from-[#22222283] to-[#2222226c] ">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="flex items-center justify-between gap-10 py-20">
            <div className="mb-4 w-full rounded bg-slate-100 bg-opacity-95 p-6 shadow-2xl md:w-2/3 md:px-12 md:py-10 lg:w-1/2">
              <h3 className="mb-8 text-4xl font-bold text-primary md:text-5xl">
                Login Now!
              </h3>
              <p></p>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-4 border p-4"
                />
                <div className="relative bg-red-300">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className=" w-full border p-4"
                  />
                  <FaEyeSlash className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-primary" />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="mt-8 rounded-md bg-primary p-3 font-bold text-white "
                />
              </form>
              <div className="mt-4 flex flex-col gap-3 md:flex-row">
                <button className="w-full rounded-md border-2 border-blue-800 p-3 font-bold text-blue-800 md:w-1/2">
                  Join With Google
                </button>
                <button className="w-full rounded-md border-2 border-blue-800 p-3 font-bold text-blue-800 md:w-1/2">
                  Join With Github
                </button>
              </div>
              <p className="mt-4 text-center font-bold">
                New User?{" "}
                <Link
                  to="/signup"
                  className="ml-2 text-primary hover:underline"
                >
                  Sign Up Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
