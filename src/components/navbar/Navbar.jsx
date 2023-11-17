"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Search from "../search/Search";

import logo from "/public/assets/logo.svg";
import Button from "../button/Button";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navLeft">
        <Link href={"/"} className="logo">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="links">
          {links.map((link) => (
            <Link href={link.url} key={link.id} className="link">
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="navRight">
        <Button text="Consultant" url="/" id="1" />
      </div>
    </div>
  );
};

export default Navbar;
