import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartslice";


const ProductCard = ({ image, title, price, oldPrice, discount, status, id }) => {

  const cartItems = useSelector((state) => state.cart.cartItems)
  const IsInCart = cartItems.find((i) => i.id === id )
  const dispatch = useDispatch()



  return (
    <div className="bg-white m-2 p-4 rounded-lg shadow hover:shadow-lg transition relative overflow-hidden w-full">
      {/* Discount badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -{discount}%
        </div>
      )}

      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-lg font-semibold mt-4 text-center">{title}</h3>

      <div className="mt-2 text-center">
        <span className="text-green-600 font-bold">${price}</span>
        {oldPrice && (
          <span className="text-gray-500 line-through ml-2">${oldPrice}</span>
        )}
      </div>

      {status === "soldout" ? (
        <p className="text-red-600 font-semibold mt-5 text-center">Sold Out</p>
      ) : (
        <button className={`mt-4 w-full bg-green-600 text-white py-2 px-4 rounded text-sm font-medium ${IsInCart ? "bg-yellow-400 pointer-events-none" : ""}`} onClick={() => dispatch(addToCart({id , title , price , image}))}>
          {IsInCart ? "IN CART" : "Shop Now"}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
