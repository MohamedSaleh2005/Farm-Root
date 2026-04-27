import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTrim } from "../../redux/search/searchslice";


const Navbar = ({ isClose, setisClose }) => {

  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()


  return (
    <header className="flex justify-between items-center px-5 py-3 lg:px-14 md:px-10 bg-[#c4dbce] fixed h-12 top-0  w-full z-50 shadow ">
      {/* logo section  */}
      <div>
        <span className=" text-xl font-bold">FarmRoot</span>
      </div>

      {/* nav section  */}
      <nav className=" flex justify-between gap-6">


        {/* icons */}
        <div className="flex gap-2 ">
          <div className=" w-35 md:w-70 flex px-3 justify-between items-center shadow rounded bg-white">
            <input type="text" placeholder="search" className=" outline-0 text-sm  w-23 md:w-55" onChange={(e) => dispatch(setSearchTrim(e.target.value))}/>
            <a href="#MENU"><FiSearch className="cursor-pointer" /></a>

          </div>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <IoIosContact />
          </span>

          <div className="relative icons hover:bg-green-500 hover:text-white cursor-pointer" onClick={() => setisClose(!isClose)}>
            <FaShoppingCart />
            <span className='absolute -top-2 -right-2.5 flex items-center justify-center w-4.5 h-4.5 text-xs rounded-full bg-green-500 text-white'>{cartItems.length}</span>
          </div>

        </div>
      </nav>


    </header>
  );
};

export default Navbar;
