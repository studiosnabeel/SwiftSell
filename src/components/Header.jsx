import React from 'react';
import { logo, cartlogo } from '../assets/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const productData = useSelector((state) => state.swift.productData);
  const userInfo = useSelector((state) => state.swift.userInfo);
  return (
    <div
      className="w-full h-20 bg-white border-b-[1px] border-b-primary flex justify-between items-center px-14 font-titleFont sticky top-0 z-50
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
      <div className="flex gap-8">
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
    </div>
  );
};

export default Header;
