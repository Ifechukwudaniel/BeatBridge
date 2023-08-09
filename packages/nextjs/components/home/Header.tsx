import React, { FunctionComponent, MouseEventHandler, useCallback, useRef, useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

interface Props {
  href: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler;
}

const NavLink: FunctionComponent<Props> = ({ href, children, onClick }) => {
  return (
    <li>
      <a
        onClick={onClick}
        href={href}
        className={`font-display no-underline max-w-sm text-base font-bold font-abel leading-tight hover:bg-base-100`}
      >
        <span className="link-underline link-underline-black "> {children} </span>
      </a>
    </li>
  );
};

/**
 * Site header
 */
export const HomeHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  const navLinks = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/service">Services</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </>
  );

  return (
    <>
      <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex  justify-between flex-shrink-0  z-20 shadow-md py-5">
        <div className="navbar-start w-auto lg:w-1/2">
          <Link href="/" passHref className=" lg:flex items-center gap-2 ml-8 mr-6">
            <div className="flex flex-col">
              <span className=" font-martel-sans font-bold leading-10 tracking-widest text-2xl"> BEAT BRIDGE</span>
            </div>
          </Link>
        </div>
        <div className="navbar-end flex-grow mr-8">
          <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-3">{navLinks}</ul>
          <div className="lg:hidden dropdown" ref={burgerMenuRef}>
            <button
              className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
              onClick={() => {
                setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
              }}
            >
              <Bars3Icon className="h-1/2" />
            </button>
            {isDrawerOpen && (
              <div
                tabIndex={0}
                className="menu -right-0 dropdown-content   bg-base-100 w-[100vw]  relative pl-10"
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                {navLinks}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
