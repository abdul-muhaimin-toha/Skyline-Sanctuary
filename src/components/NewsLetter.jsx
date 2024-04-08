const NewsLetter = () => {
  return (
    <section className="bg-neutral py-16 text-white">
      <div className=" mx-auto max-w-xl  px-4">
        <h1 className="mb-4 text-center text-3xl font-bold text-primary md:text-5xl md:font-extrabold">
          Homefront Highlights
        </h1>
        <p className="mb-10 text-center text-sm font-medium text-white md:text-base">
          Your Comprehensive Guide to Real Estate Trends, Tips, and Market
          Insights for Informed Homeownership Decisions!
        </p>
      </div>
      <div className="mx-auto max-w-full px-8 py-4 md:max-w-screen-2xl ">
        <div className="flex items-center justify-center ">
          <form className="flex w-full flex-col items-center justify-center gap-6  md:flex-row">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b bg-transparent px-3 py-2 focus:outline-none md:w-auto"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b bg-transparent px-3 py-2 focus:outline-none md:w-auto"
            />
            <input
              type="submit"
              value="Submit"
              className="w-full rounded bg-primary px-6 py-2 md:w-auto "
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
