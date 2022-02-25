import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../Context/CartProvider";

function Header() {
  const { cart } = useCart();
  return (
    <header className="w-full  flex justify-around items-center bg-white shadow-md sticky top-0 z-10">
      <nav className="container text-sm md:text-md h-16 flex items-center justify-between">
        <ul className="flex justify-start items-center px-3 w-64">
          <NavLink to="/">
            <li className="mr-7 p-2">خانه</li>
          </NavLink>
          <NavLink to="/">
            <li className="mr-7">بلاگ</li>
          </NavLink>
          <NavLink to="/">
            <li className="mr-7">حساب کاربری</li>
          </NavLink>
        </ul>
      </nav>
      <NavLink to="/cart">
        <div className="pl-5 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span className="w-5 h-5 absolute top-3  left-9 rounded-md text-xs font-bold text-white bg-red-500 flex justify-center items-center">
            {new Number(`${cart.length}`).toLocaleString("fa-ir")}
          </span>
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
