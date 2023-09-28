// images
import profile from "../../assets/images/profileFelipe.jpg";

// react-icons
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  goTo(section: string): void;
  showMobileMenu: boolean;
  displayMenu(): void;
};

const Header = ({ goTo, showMobileMenu, displayMenu }: Props) => {
  return (
    <header className="fixed z-50 w-full text-white px-12 py-6 bg-[#0c1116] space-y-4 flex justify-between items-start">
      <a href="https://felipetn1989.github.io/portifolio">
        <div className="flex justify-center gap-4 items-center">
          <img
            src={profile}
            className="w-12 h-12 rounded-full border-black border p-0.5"
            alt="Headshot of Felipe Thomé"
          />
          <h1 className="text-center font-bold uppercase hover:cursor-pointer">
            felipe thome.
          </h1>
        </div>
      </a>

      <button onClick={displayMenu}>
        <GiHamburgerMenu className="block lg:hidden hover:cursor-pointer" />
      </button>
      {showMobileMenu && (
        <nav className="absolute bg-white text-black w-[80%] right-[50%] translate-x-[50%] top-24 p-8 lg:w-[unset] lg:translate-x-[unset] lg:bg-[unset] lg:text-white lg:p-[unset] lg:right-[unset] lg:top-[unset] lg:relative lg:block">
          <ul className="flex flex-col lg:flex-row gap-8 justify-center font-bold">
            <li className="hover:cursor-pointer hover:text-[#5c7ea2] border-b border-b-gray-400 pb-6 lg:pb-[unset] lg:border-b-0">
              <button className="uppercase" onClick={() => goTo("home")}>
                Home
              </button>
            </li>
            <li className="hover:cursor-pointer hover:text-[#5c7ea2] border-b border-gray-400 pb-6 lg:pb-[unset] lg:border-b-0">
              <button className="uppercase" onClick={() => goTo("about")}>
                Sobre
              </button>
            </li>
            <li className="hover:cursor-pointer hover:text-[#5c7ea2]">
              <button className="uppercase" onClick={() => goTo("projects")}>
                Projetos
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
