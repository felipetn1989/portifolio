// react icons#5c7ea2
import { SetStateAction } from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import ProjecCard from "../layout/ProjecCard";
import Button from "../layout/Button";

type Props = {
  goTo(section: string): void;
  hideMenu(): void;
  language: string;
  setLanguage: React.Dispatch<SetStateAction<string>>;
};

const Main = ({ goTo, hideMenu, language, setLanguage }: Props) => {
  const accentColor: string = "#5c7ea2";

  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Git",
    "Github",
    "Responsive Design",
  ];

  function toggleLanguage() {
    language === "PT" ? setLanguage("EN") : setLanguage("PT");
  }

  return (
    <main
      className="bg-[#0f1c3a] text-[#d8d8d8] px-8 pt-24 pb-4 lg:px-16 space-y-8 max-w-[80rem] m-auto"
      onClick={hideMenu}
    >
      <div id="home" className="space-y-8 py-16">
        <div className="space-y-10">
          <Button
            btnText={
              language === "PT" ? "English Version" : "Versão em Português"
            }
            font="uppercase"
            handleClick={toggleLanguage}
          />
          <h1 className="text-[3rem] lg:text-[4rem] font-bold leading-[4.5rem]">
            <span className={`text-[${accentColor}] text-base font-bold`}>
              {language === "PT" ? "Olá, meu nome é" : "Hello, I'm"}
            </span>
            <br /> Felipe Thomé. <br />{" "}
            <span className="text-[#777777]">
              {language === "PT"
                ? "Desenvolvo aplicações web."
                : "I am a web developer."}
            </span>
            <p className="text-base pt-4">Front End Dev</p>
          </h1>

          <button
            className={`bg-[${accentColor}] text-white py-4 px-6 font-bold uppercase rounded-xl hover:bg-white hover:text-[${accentColor}]`}
            onClick={() => goTo("projects")}
          >
            {language === "PT" ? "Meus Projetos" : "My Projects"}
          </button>
        </div>
        <div className="text-2xl flex gap-4 pt-8">
          <a href="https://github.com/felipetn1989" target="blank">
            <FaGithub className={`hover:cursor-pointer hover:text-[#5c7ea2]`} />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-thome-a0094a276/"
            target="blank"
          >
            <FaLinkedin
              className={`hover:cursor-pointer hover:text-[#5c7ea2]`}
            />
          </a>
          <a href="https://instagram.com/ftn1989" target="blank">
            <FaInstagram
              className={`hover:cursor-pointer hover:text-[#5c7ea2]`}
            />
          </a>
        </div>
      </div>
      <div id="about" className="lg:grid lg:grid-cols-2 lg:gap-32">
        <div className="space-y-4">
          <div className="w-fit">
            <h2
              className={`text-[${accentColor}] uppercase font-thin text-2xl`}
            >
              <span className="text-white">01.</span>{" "}
              {language === "PT" ? "Sobre" : "About"}
            </h2>
            <div
              className={`bg-[${accentColor}] w-full h-1 skew-x-[-30deg]`}
            ></div>
          </div>
          <div className="space-y-4 text-justify text-[#808080]">
            <p>
              {language === "PT"
                ? "Recentemente resolvi me desafiar no mundo da programação para aprender novas habilidades e desde então, descoberto esse novo interesse, passei a desenvolver aplicações web baseadas em JavaScript, focando em design responsivo e mobile-first. Meus projetos atualmente envolvem o uso de frameworks como Tailwind e React, além de CSS e JS puros. Desenvolvi aplicações a partir de APIs que são dinamicamente incorporadas na página, buscando criar uma experiência visualmente engajante para o usuário."
                : "I recently decided to challenge myself in the world of programming to learn new skills. Since then, I have discovered this new interest and started developing web applications based on JavaScript, with a focus on responsive design and mobile-first development. My current projects involve the use of frameworks like Tailwind and React, as well as pure CSS and JavaScript. I have developed applications that dynamically incorporate data from APIs into the page, aiming to create a visually engaging user experience."}
            </p>
            <p>
              {language === "PT"
                ? "Antes de iniciar meus estudos em desenvolvimento de software, obtive uma graduação em engenharia mecânica, certificação de piloto privado de aviões, certificação para atuação em distribuição de produtos financeiros e atuei primariamente como professor particular de ciências exatas e inglês."
                : "Before starting my studies in software development, I obtained a bachelor's degree in mechanical engineering, a private pilot certification for airplanes, certification to work in the distribution of financial products, and primarily worked as a private tutor in Math, Physics and English."}
            </p>
            <p>
              {language === "PT"
                ? "Busco uma oportunidade para desenvolver projetos maiores em equipe, contribuindo com o conhecimento que já tenho e aprendendo ainda mais sobre a área."
                : "I am seeking an opportunity to work on larger team projects, contributing with the knowledge I already possess and continuing to learn more about the field."}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-thin text-2xl uppercase mt-4 lg:mt-[unset]">
            {language === "PT" ? "Habilidades" : "Skills"}
          </h2>
          <div className="flex gap-6 flex-wrap w-80 text-white">
            {skills.map((element, index) => (
              <span
                key={index}
                className={`bg-[${accentColor}] w-fit px-4 py-2 rounded-md`}
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div id="projects" className="w-full">
        <h2 className={`text-[${accentColor}] uppercase font-thin text-2xl`}>
          <span className="text-white">02.</span>{" "}
          {language === "PT" ? "Projetos" : "Projects"}
        </h2>
        <div
          className={`bg-[${accentColor}] w-[9.75rem] h-1 skew-x-[-30deg]`}
        ></div>
        <div className="mt-8 space-y-6 flex flex-col w-full lg:flex-row lg:space-y-0 lg:gap-4 lg:justify-center">
          <ProjecCard language={language} />
        </div>
      </div>
    </main>
  );
};

export default Main;
