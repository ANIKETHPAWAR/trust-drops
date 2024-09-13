import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Mande from '../assets/mandeLogo.svg';
import Twitter from '../assets/twitter.svg';
import Discord from '../assets/discord.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Context } from "../App";
import useTheme from "../context/theme";
import MandeLogodark from "../assets/mandeLogo-dark.svg";
import discorddark from "../assets/discord-dark.png";
import twitterdark from "../assets/twitter-dark.png";
import style from "./theme.css";
function Navbar() {
  const { pathname } = useLocation();
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    setActiveRoute(pathname);
    handleNav();
  }, [pathname]);

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  // Dark Mode
  const { themeMode, brightTheme, darkTheme } = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      brightTheme();
    }
  };
  console.log("themeMode", themeMode);

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'Airdrop', to: '/airdrop' },
    { id: 3, text: 'Credibility staking', to: '/staking' },
    { id: 4, text: 'Leaderboard', to: '/leaderboard' },
  ];

  return (
    <div className='nav-container font-mono flex flex-1 justify-between bg-white h-[10vh] mx-auto text-black dark:bg-black dark:text-white max-w-[90%]'>
      {/* Logo */}
      <div className='flex  content-center'>
        <Link
          className='text-3xl font-semibold text-white flex items-center justify-self-start gap-2 tracking-wider'
          to={'/'}
        >
            {" "}
          {themeMode !== null && themeMode === "dark" ? (
            <img height={150} width={150} src={Mande}></img>
          ) : (
            <img height={150} width={150} src={MandeLogodark}></img>
          )}
        </Link>
      </div>
      <div className='flex content-center justify-end w-full'>
        {/* Desktop Navigation */}
        <ul className='navbar-left-container gap-8 md:flex items-center justify-self-end hidden'>
          {navItems.map(item => (
            <Link
              to={item.to}
              className={`${
                activeRoute == item.to
                  ? 'text-[#7071E8] font-bold'
                  : 'dark:text-white'
              }   text-[18px]`}
            >
              {item.text}
            </Link>
          ))}
         <a href="https://twitter.com/MandeNetwork" target="_blank">
            {themeMode !== null && themeMode === "dark" ? (
              <img
                src={Twitter}
                width={25}
                height={25}
                className="cursor-pointer"
              ></img>
            ) : (
              <img
                src={twitterdark}
                width={25}
                height={25}
                className="cursor-pointer"
              ></img>
            )}
          </a>
          <a href="https://discord.gg/9Ugch3fRC2" target="_blank">
            {themeMode !== null && themeMode === "dark" ? (
              <img
                src={Discord}
                width={25}
                height={25}
                className="cursor-pointer"
              ></img>
            ) : (
              <img
                src={discorddark}
                width={25}
                height={25}
                className="cursor-pointer"
              ></img>
            )}
          </a>
          <div className='text-[18px]'>
            <ConnectButton showBalance={false}/>
          </div>
             {/* dark mode */}
             <label className="switch text-[1.06rem] leading-6 relative inline-block w-16 h-9">
            <span class="sun">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#ffd43b">
                  <circle r="5" cy="12" cx="12"></circle>
                  <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                </g>
              </svg>
            </span>
            <span class="moon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
            </span>
            <input
              type="checkbox"
              id="check"
              className="input opacity-0 w-0 h-0"
              onChange={onChangeBtn}
              checked={themeMode === "dark"}
            />
            <span className="slider"></span>
          </label>
        </ul>

        {/* Mobile Connect wallet and Navigation Icon */}
        {!nav && <div className='content-center block md:hidden text-[12px] pr-2'>
          <ConnectButton accountStatus="address" showBalance={false}/>
        </div>}
        <div onClick={handleNav} className='content-center block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "flex flex-col z-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r dark:border-r-gray-900 text-black bg-white  dark:bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <Link
          className="p-4 text-3xl font-semibold text-black dark:text-white flex items-center gap-2 tracking-wider"
          to={"/"}
        >
          <img
            height={100}
            width={100}
            src={themeMode === "dark" ? Mande : MandeLogodark}
          ></img>
        </Link>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link
            to={item.to}
            className={`${
              activeRoute == item.to
                ? "text-[#7071E8] font-bold"
                : "dark:text-white"
            }  p-4 cursor-pointer text-[18px]`}
          >
            {item.text}
          </Link>
        ))}
        <div
          className="flex items-center justify-between font-bold text-black dark:text-white
          }  p-4 cursor-pointer text-[18px]"
        >
          Dark Mode
          <label class="switch">
            <span class="sun">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#ffd43b">
                  <circle r="5" cy="12" cx="12"></circle>
                  <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                </g>
              </svg>
            </span>
            <span class="moon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
            </span>
            <input
              type="checkbox"
              id="check"
              class="input"
              onChange={onChangeBtn}
              checked={themeMode === "dark"}
            />
            <span class="slider"></span>
          </label>
        </div>

        <a
          href="https://twitter.com/MandeNetwork"
          target="_blank"
          className="p-4"
        >
          <img
            src={themeMode === "dark" ? Twitter : twitterdark}
            width={25}
            height={25}
            className="cursor-pointer"
          ></img>
        </a>
        <a href="https://discord.gg/9Ugch3fRC2" target="_blank" className="p-4">
          <img
            src={themeMode === "dark" ? Discord : discorddark}
            width={25}
            height={25}
            className="cursor-pointer"
          ></img>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
