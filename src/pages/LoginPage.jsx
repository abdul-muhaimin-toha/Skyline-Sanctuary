import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const LoginPage = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const { googleLogin, githubLogin } = useAuth();

  const handleFormSubmit = () => {};

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

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
              <form onSubmit={handleFormSubmit} className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-4 border p-4"
                />
                <div className="relative bg-red-300">
                  <input
                    type={isPassVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className=" w-full border p-4"
                  />
                  <p
                    className="cursor-pointer"
                    onClick={() => setIsPassVisible(!isPassVisible)}
                  >
                    {isPassVisible ? (
                      <FaEyeSlash className="absolute right-5 top-1/2 -translate-y-1/2  text-2xl text-primary" />
                    ) : (
                      <FaEye className="absolute right-5 top-1/2 -translate-y-1/2  text-2xl text-primary" />
                    )}
                  </p>
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="mt-8 rounded-md bg-primary p-3 font-bold text-white "
                />
              </form>
              <div className="mt-4 flex flex-col gap-3 md:flex-row">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full rounded-md border-2 border-blue-800 p-3 font-bold text-blue-800 md:w-1/2"
                >
                  Join With Google
                </button>
                <button
                  onClick={handleGithubLogin}
                  className="w-full rounded-md border-2 border-blue-800 p-3 font-bold text-blue-800 md:w-1/2"
                >
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
