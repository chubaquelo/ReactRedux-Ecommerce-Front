import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <Router>
    <header className="h-15percent-vh flex flex-row justify-center mt-3 w-10/12 mx-auto">
      <div id="logo" className="w-2/12 flex items-center justify-center">
        <Link to="/">
          <img
            src="../assets/logo-jewelry.png"
            alt="Logo"
            className="cursor-pointer"
            width="100"
          />
        </Link>
      </div>
      <div className="header-right-col w-10/12 flex flex-col">
        <div className="filita-de-arriba text-right py-1 text-black text-sm pr-3">
          <p className="italic text-gray-500 mr-2">Exclusive jewelry. Special for gifts.</p>
        </div>
        <div className="filita-de-abajo flex flex-row h-full">
          <nav
            id="navbar"
            className="w-12/12 md:w-10/12 flex items-center w-full px-6"
          >
            <ul className="flex flex-row w-full justify-around px-10">
              <Link to="/">
                <li className="cursor-pointer text-black font-bold">Home</li>
              </Link>
              <Link to="/">
                <li className="cursor-pointer text-black font-bold hidden sm:inline-flex">
                  Products
                </li>
              </Link>
              <Link to="/not-found">
                <li className="cursor-pointer text-black font-bold hidden sm:inline-flex">
                  Accesories
                </li>
              </Link>
              <Link to="/not-found">
                <li className="cursor-pointer text-black font-bold hidden sm:inline-flex">
                  Contact
                </li>
              </Link>
            </ul>
          </nav>
          <div
            id="cart-btn"
            className="flex items-center justify-center w-2/12 hidden lg:inline-flex"
          >
            <button
              type="button"
              className="py-1 bg-yellow-300 px-2 cursor-pointer hover:bg-yellow-400 text-black shadow-md"
            >
              Cart: 0 Items
            </button>
          </div>
        </div>
      </div>
    </header>
  </Router>
);

export default Header;
