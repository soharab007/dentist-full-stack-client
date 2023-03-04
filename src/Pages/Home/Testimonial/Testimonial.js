import React from "react";
import Quote from "../../../assets/icons/quote.svg";
import People1 from "../../../assets/images/people1.png";
import People2 from "../../../assets/images/people2.png";
import People3 from "../../../assets/images/people1.png";
import Review from "./Review";

const Testimonial = () => {
  const reviewsData = [
    {
      id: 1,
      name: "John Doe",
      review:
        "Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse",
      location: "New York",
      img: People1,
    },
    {
      id: 2,
      name: "Jennifer",
      review:
        "Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse",
      location: "Manchester",
      img: People2,
    },
    {
      id: 3,
      name: "Henry Wilson",
      review:
        "Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse",
      location: "Washington",
      img: People3,
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl fon-bold text-primary">Testimonial</h4>
          <h3 className="text-4xl">What Our Patient Says</h3>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={Quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviewsData.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
