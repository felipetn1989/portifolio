import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-black text-white">
      <h1 className="text-center font-bold">&lt;&gt; felipethome. &lt;/&gt;</h1>
      <nav className="">
        <ul className="flex gap-4 justify-center uppercase font-thin">
          <li className="hover:cursor-pointer hover:text-[#49B8AC]"><a href="#home">Home</a></li>
          <li className="hover:cursor-pointer hover:text-[#49B8AC]"><a href="#about">Sobre</a></li>
          <li className="hover:cursor-pointer hover:text-[#49B8AC]">Projetos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
