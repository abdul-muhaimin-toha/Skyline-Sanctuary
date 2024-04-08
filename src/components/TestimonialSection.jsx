import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import { useEffect } from "react";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <section>
      <SectionHeader
        title="Client Testimonials"
        subTitle="Discover What Our Satisfied Customers Have to Say About Their Real Estate Journey with Us"
      />
      <div className="mx-auto max-w-screen-2xl px-3 lg:px-6">
        <div className=" grid grid-cols-1 gap-6 py-4 md:grid-cols-2 md:py-10 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
