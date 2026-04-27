import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./SliderSettings";
import review1 from "../images/review1.jpg"
import review2 from "../images/review2.jpg"
import review3 from "../images/review3.jpg"
import review4 from "../images/review4.jpg"
const testimonials = [
  {
    name: "Oliver Bennett",
    comment: "The veggies were so fresh and packed beautifully. Love it!",
    img: review1,
  },
  {
    name: "Amelia Brooks",
    comment: "Quick delivery & top-notch quality. Highly recommend!",
    img: review2,
  },
  {
    name: "Charlotte Harris",
    comment: "Finally, a brand I can trust for real organic produce.",
    img: review3,
  },
  {
    name: "James Walker",
    comment: "Organic, fresh, and affordable. My family loves it!",
    img: review4,
  },
];



export const Testimonial = () => { 
return (
  <section className="bg-white py-16 px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
      What Our Customers Say
    </h2>
    <div className="slider-container max-w-6xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-4 mb-2">
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center h-full">
              <img
                src={item.img}
                alt={item.name}
                className=" w-40 h-36 mx-auto rounded-full mb-5"
              />
              <p className="text-gray-700 italic mb-2">"{item.comment}"</p>
              <h4 className="font-semibold text-green-700">{item.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
)
}

export default Testimonial;
