import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { emailPassLogin, googleLogin, githubLogin } = useAuth();

  const handleFormSubmit = (data) => {
    const { email, password } = data;
    emailPassLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        reset();
        navigate(location?.state ? location.state : "/");

        toast("successfully logged in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Email and password doesn't matched", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(location?.state ? location.state : "/");
        toast("successfully logged in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Google sign in failed", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        navigate(location?.state ? location.state : "/");
        toast("successfully logged in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        toast("Github sign in failed", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <section className="bg-hero-slider-2 bg-cover">
      <Helmet>
        <title>Skyline Sactuary - Log In</title>
      </Helmet>
      <div className="bg-gradient-to-b from-[#22222283] to-[#2222226c] ">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="flex min-h-[calc(100vh-305px)] items-center justify-between gap-10 py-20">
            <div className="mb-4 w-full rounded bg-slate-100 bg-opacity-95 p-6 shadow-2xl md:w-2/3 md:px-12 md:py-10 lg:w-1/2">
              <h3 className="mb-8 text-4xl font-bold text-primary md:text-5xl">
                Login Now!
              </h3>
              <p></p>
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="flex flex-col"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" border p-4"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "You must fill email field",
                    },
                  })}
                />
                {errors.email && (
                  <p className="px-1 pt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
                <div className="relative">
                  <input
                    type={isPassVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="mt-4 w-full border p-4"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "You must fill password field",
                      },
                    })}
                  />
                  <p
                    className="cursor-pointer"
                    onClick={() => setIsPassVisible(!isPassVisible)}
                  >
                    {isPassVisible ? (
                      <FaEyeSlash className="absolute right-5 top-2/3 -translate-y-1/2  text-2xl text-primary" />
                    ) : (
                      <FaEye className="absolute right-5 top-2/3 -translate-y-1/2  text-2xl text-primary" />
                    )}
                  </p>
                </div>
                {errors.password && (
                  <p className="px-1 pt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
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
