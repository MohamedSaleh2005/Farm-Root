import React, { useState } from "react";
import ProductCard from "../layouts/ProductCard";
import products from "../data/productData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./SliderSettings";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTrim } from "../../redux/search/searchslice";
import { setSortBy } from "../../redux/filter/filterslice";



const Products = () => {
  const SearchTrim = useSelector((state) => state.search.SearchTrim)
  const SortBy = useSelector((state) => state.filter.SortBy)
  const dispatch = useDispatch()

  let data = [...products];

  // search
  data = data.filter((product) =>
    product.title.toLowerCase().includes(SearchTrim.toLowerCase())
  );

  // sort
  if (SortBy === "lowPrice") { data.sort((a, b) => a.price - b.price) }
  if (SortBy === "discount") { data.sort((a, b) => (b.discount || 0) - (a.discount || 0)) }

  return (
    <section id="MENU" className="bg-gray-50 pb-10 px-5 lg:px-14 mt-5 py-40">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-3 cursor-pointer">
        Our Products
      </h2>

      <div className="flex justify-center items-center gap-3 mb-10">
        <button onClick={() => dispatch(setSortBy("lowPrice"))} className={SortBy === "lowPrice" ? "font-bold underline text-green-600" : ""}>
          Less Price
        </button>

        <span className="text-gray-400">|</span>

        <button onClick={() => dispatch(setSortBy("discount"))} className={SortBy === "discount" ? "font-bold underline text-green-600" : ""}>
          Most Discount
        </button>
      </div>

      <div className="shadow h-85 overflow-hidden">
        <div className="slider-container mx-auto  ">
          <Slider {...settings}>
            {data.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
