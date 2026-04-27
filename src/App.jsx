import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { useEffect , useState} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cart from "./components/Cart";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isClose, setisClose] = useState(true); {/* to Cart & NavBar */ }


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("section").forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);



  return (
    <>

      <Navbar isClose={isClose} setisClose={setisClose} />
      <Cart isClose={isClose} />
      <Hero />
      <Features />
      <Products />
      <About />
      <HowItWorks />
      <Testimonial />
      <Footer />


    </>
  );
};

export default App;