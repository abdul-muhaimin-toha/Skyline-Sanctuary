import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const UpdateProfilePage = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user, setIsLoading, updateUserProfile } = useAuth();

  const handleFormSubmit = (data) => {
    const { name, photoURL } = data;
    updateUserProfile(name, photoURL)
      .then(() => {
        setIsLoading(false);
        toast("Profile updated successfully", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast("Profile updated failed", {
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
        <title>SkyLine Sactuary - Update Profile</title>
      </Helmet>
      <div className="bg-gradient-to-b from-[#22222283] to-[#2222226c] ">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="flex min-h-[calc(100vh-305px)] items-center justify-between gap-10 py-20">
            <div className="mb-4 w-full rounded bg-slate-100 bg-opacity-95 p-6 shadow-2xl md:w-2/3 md:px-12 md:py-10 lg:w-1/2">
              <h3 className="mb-8 text-4xl font-bold text-primary md:text-5xl">
                Update Your Profile
              </h3>
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="flex flex-col"
              >
                <p className="px-1 pb-3 font-bold text-primary">Your Email</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" mb-4 border-2 border-primary p-4"
                  disabled
                  defaultValue={user.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="px-1 pt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
                <p className="px-1 pb-3 font-bold text-primary">Your Name</p>
                <input
                  type="name"
                  placeholder="Enter your Name"
                  className=" border p-4"
                  defaultValue={user.displayName}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "You must fill name field",
                    },
                  })}
                />
                {errors.name && (
                  <p className="px-1 pt-2 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}

                <p className="mt-4 px-1 pb-3 font-bold text-primary">
                  Your Photo URL
                </p>

                <input
                  type="text"
                  placeholder="Enter your photo url"
                  className="  border p-4"
                  defaultValue={user.photoURL}
                  {...register("photoURL")}
                />

                <input
                  type="submit"
                  value="Update"
                  className="mt-8 rounded-md bg-primary p-3 font-bold text-white "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfilePage;
