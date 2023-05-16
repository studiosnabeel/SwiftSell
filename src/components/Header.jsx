import React, { useState } from "react";
import { logo, cartlogo } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [nav, setNav] = useState(false);
  const productData = useSelector((state) => state.swift.productData);
  const userInfo = useSelector((state) => state.swift.userInfo);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className="relative w-full h-20 bg-white border-b-[1px] border-b-primary flex justify-between items-center px-14 font-titleFont sticky top-0 z-50
    "
    >
      <div>
        <Link to="/">
          <div
            className="max-w-screen-xl h-full mx-auto flex items-center justify-between
        "
          >
            <img className="w-16" src={logo} alt="Logo SwiftSell" />
          </div>
        </Link>
      </div>
      <div className="flex gap-8 max-[768px]:hidden">
        <ul className="flex justify-center items-center gap-8">
          <li
            className="text-base text-primary font-bold hover:text-secondary decoration-[1px] cursor-pointer duration-300
          "
          >
            Home
          </li>
          <li
            className="text-base text-primary font-bold hover:text-secondary decoration-[1px] cursor-pointer duration-300
          "
          >
            Pages
          </li>
          <li
            className="text-base text-primary font-bold hover:text-secondary decoration-[1px] cursor-pointer duration-300
          "
          >
            Shop
          </li>
          <li
            className="text-base text-primary font-bold hover:text-secondary decoration-[1px] cursor-pointer duration-300
          "
          >
            Element
          </li>
          <li
            className="text-base text-primary font-bold hover:text-secondary decoration-[1px] cursor-pointer duration-300
          "
          >
            Blog
          </li>
        </ul>
        <Link to="/cart">
          <div className="relative flex justify-center align-middle w-8 cursor-pointer duration-300">
            <img className="w-6" src={cartlogo} alt="cart" />
            <span className="absolute w-6 top-1 left-1 text-sm flex item-center justify-center font-semibold font-titleFont text-white">
              {productData.length}
            </span>
          </div>
        </Link>
        <Link to="/login">
          <img
            className="w-6 h-6 rounded-full"
            src={userInfo ? userInfo.image : logo}
            alt="Sign-in"
          />
        </Link>
        {userInfo && <p className="text-primary ">{userInfo.name}</p>}
      </div>
      <div className="min-[768px]:hidden">
        <i onClick={toggleNav} className="text-primary cursor-pointer">
          <GiHamburgerMenu />
        </i>
      </div>
      {/* Conditionally render the navbar */}
      {nav && (
        <div className="min-[768px]:hidden absolute top-20 left-0 w-full bg-white border-b-[1px] border-b-primary py-4">
          <ul className="flex justify-center items-center gap-8">
            <Link to="/">
              <li className="text-base text-primary font-bold hover:text-secondary decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>

            <li className="text-base text-primary font-bold hover:text-secondary decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <Link to="/cart">
              <div className="relative flex justify-center align-middle w-8 cursor-pointer duration-300">
                <img className="w-6" src={cartlogo} alt="cart" />
                <span className="absolute w-6 top-1 left-1 text-sm flex item-center justify-center font-semibold font-titleFont text-white">
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <img
                className="w-6 h-6 rounded-full"
                src={userInfo ? userInfo.image : logo}
                alt="Sign-in"
              />
            </Link>
            {userInfo && <p className="text-primary ">{userInfo.name}</p>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
