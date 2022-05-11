import React from "react";

// CSS
import styles from "./style.module.css";

// next/link
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full shadow-lg py-4 pl-20">
      <div className="flex space-x-10">
        <Link href={"/"}>
          <span className="font-semibold text-xl cursor-pointer">
            Lidyverse Marketplace
          </span>
        </Link>
        <div className="cursor-pointer hover:text-red-500 transition duration-300 pt-1">
          <Link href={"/likes"}>
            <span className="font-semibold my-auto">Likes</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
