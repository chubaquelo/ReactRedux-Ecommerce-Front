import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-200 h-15percent-vh flex flex-row justify-center">
    <div id="logo" className="w-2/12 flex items-center justify-center">
      <Link to="/">
        <img
          src="../assets/logo-jewelry.png"
          alt="Logo"
          className="cursor-pointer"
          width="110"
        />
      </Link>
    </div>
    <div className="header-right-col w-10/12 flex flex-col bg-green-200">
      <div className="filita-de-arriba bg-green-600 text-right py-1 text-white text-sm pr-3">
        <p>Exclusive jewelry. Special for gifts.</p>
      </div>
      <div className="filita-de-abajo flex flex-row bg-pink-300 h-full">
        <nav
          id="navbar"
          className="w-10/12 bg-purple-400 flex items-center w-full"
        >
          <ul className="flex flex-row w-full justify-around px-10">
            <Link to="/">
              <li className="cursor-pointer text-white font-bold">Home</li>
            </Link>
            <Link to="/not-found">
              <li className="cursor-pointer text-white font-bold">
                Categories
              </li>
            </Link>
            <Link to="/not-found">
              <li className="cursor-pointer text-white font-bold">
                Accesories
              </li>
            </Link>
            <Link to="/not-found">
              <li className="cursor-pointer text-white font-bold">Services</li>
            </Link>
            <Link to="/not-found">
              <li className="cursor-pointer text-white font-bold">Support</li>
            </Link>
            <Link to="/not-found">
              <li className="cursor-pointer text-white font-bold">Contact</li>
            </Link>
          </ul>
        </nav>
        <div id="cart-btn" className="flex items-center justify-center w-2/12">
          <button
            type="button"
            className="py-2 bg-yellow-500 px-2 cursor-pointer hover:bg-yellow-600 text-white shadow-md"
          >
            Cart: 0 Items
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
