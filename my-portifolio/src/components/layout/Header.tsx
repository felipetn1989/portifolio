// images

import profile from "../../assets/images/profileFelipe.jpg";

type Props = {
  goTo(section: string): void;
};

const Header = ({ goTo }: Props) => {
  return (
    <header className="fixed z-10 w-full text-white px-12 py-6 bg-black space-y-4 lg:flex lg:justify-between">
      <div className="flex justify-center gap-4 items-center">
        <img
          src={profile}
          className="w-12 h-12 rounded-full border-black border p-0.5"
          alt="Headshot of Felipe Thomé"
        />
        <h1 className="text-center font-bold uppercase">felipe thome.</h1>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex gap-8 justify-center font-bold">
          <li className="hover:cursor-pointer hover:text-[#5c7ea2]">
            <button className="uppercase" onClick={() => goTo("home")}>Home</button>
          </li>
          <li className="hover:cursor-pointer hover:text-[#5c7ea2]">
            <button className="uppercase" onClick={() => goTo("about")}>Sobre</button>
          </li>
          <li className="hover:cursor-pointer hover:text-[#5c7ea2]">
            <button className="uppercase" onClick={() => goTo("projects")}>Projetos</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
