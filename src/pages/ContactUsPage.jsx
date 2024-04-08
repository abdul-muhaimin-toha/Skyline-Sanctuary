import { Helmet, HelmetProvider } from "react-helmet-async";

const ContactUsPage = () => {
  return (
    <section className="bg-hero-slider-5 bg-cover">
      <HelmetProvider>
        <Helmet>
          <title>SkyLine Sactuary - Contact Us</title>
        </Helmet>
      </HelmetProvider>
      <div className="bg-gradient-to-b from-[#22222283] to-[#2222226c] ">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="flex min-h-[calc(100vh-305px)] items-center justify-center gap-10 py-20">
            <div className="mb-4 w-full rounded bg-slate-100 bg-opacity-95 p-6 shadow-2xl md:w-2/3 md:px-12 md:py-10 lg:w-1/2">
              <h3 className="mb-4 text-center text-4xl font-bold text-primary md:text-5xl">
                Contact Us
              </h3>
              <p className="mx-auto mb-8 max-w-md text-center">
                Get in Touch with Us Today to Explore Your Real Estate
                Opportunities and Experience Exceptional Service!
              </p>
              <form className="flex flex-col">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mb-4 border p-4"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-4 border p-4"
                />
                <textarea
                  placeholder="Your message"
                  cols="30"
                  rows="10"
                  className="p-4"
                ></textarea>

                <input
                  type="submit"
                  value="Send Message"
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

export default ContactUsPage;
