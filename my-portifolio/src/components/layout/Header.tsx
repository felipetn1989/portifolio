import React from "react";

// images

import profile from "../../assets/images/profileFelipe.jpg";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="fixed z-10 w-full text-[#000000] px-12 py-6 bg-white space-y-4 lg:flex lg:justify-between">
      <div className="flex justify-center gap-4 items-center">
        <img
          src={profile}
          className="w-12 h-12 rounded-full border-black border p-0.5"
          alt="Headshot of Felipe Thomé"
        />
        <h1 className="text-center font-bold uppercase">felipe thome.</h1>
      </div>
      <nav>
        <ul className="flex gap-8 justify-center uppercase font-bold">
          <li className="hover:cursor-pointer hover:text-[#49B8AC]">
            <a href="#home">Home</a>
          </li>
          <li className="hover:cursor-pointer hover:text-[#49B8AC]">
            <a href="#about">Sobre</a>
          </li>
          <li className="hover:cursor-pointer hover:text-[#49B8AC]">
            Projetos
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
