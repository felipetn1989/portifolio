// react icons#5c7ea2
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// interfaces
import { Iproject } from "../interfaces/IProjects";

// estilos CSS
import style from "./Main.module.css";
import Button from "../layout/Button";

type Props = {
  goTo(section: string): void;
};

const Main = ({ goTo }: Props) => {
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

  const myProjects: Iproject[] = [
    {
      projectId: "ipTracker",
      projectTitle: "IP Address Tracker",
      projectThumb: "../../../public/IpTrackerThumbnail.png",
      projectURL: "https://felipetn1989.github.io/ip-address-tracker-master/",
      projectDescription:
        "Tracker de endereço IP. O usuário coloca um IP na barra de busca e o site irá mostrar os dados deste IP e sua localização em um mapa. Projeto com React e Tailwind, utilizando duas API's, uma para o IP e outra para a localização no mapa.",
    },
    {
      projectId: "urlShort",
      projectTitle: "Encurtador de Links",
      projectThumb: "../../../public/urlShortenerLink.png",
      projectURL: "https://felipetn1989.github.io/url-shortening-api-master/",
      projectDescription:
        "Projeto de um site com API em que, na barra de texto, o usuário pode colocar um link e a aplicação irá retornar uma versão curta do link. O projeto ainda conta com uma função de copiar para área de transferência e uma lista de links encurtados gerados dinamicamente.",
    },
  ];

  return (
    <main className="bg-[#0f1c3a] text-[#d8d8d8] px-8 pt-24 pb-4 lg:px-16 space-y-8 max-w-[80rem] m-auto">
      <div id="home" className="space-y-8 py-16">
        <div className="space-y-10">
          <h1 className="text-[4rem] font-bold leading-[4.5rem]">
            <span className={`text-[${accentColor}] text-base font-bold`}>
              Olá, meu nome é
            </span>
            <br /> Felipe Thomé. <br />{" "}
            <span className="text-[#777777]">Desenvolvo aplicações web.</span>
            <p className="text-base pt-4">Dev Front End</p>
          </h1>

          <button
            className={`bg-[${accentColor}] text-white py-4 px-6 font-bold uppercase rounded-xl hover:bg-white hover:text-[${accentColor}]`}
            onClick={() => goTo("projects")}
          >
            Meus Projetos
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
              <span className="text-white">01.</span> Sobre
            </h2>
            <div
              className={`bg-[${accentColor}] w-full h-1 skew-x-[-30deg]`}
            ></div>
          </div>
          <div className="space-y-4 text-justify text-[#808080]">
            <p>
              Recentemente resolvi me desafiar no mundo da programação para
              aprender novas habilidades e desde então, descoberto esse novo
              interesse, passei a desenvolver aplicações web baseadas em
              JavaScript, focando em design responsivo e mobile-first. Meus
              projetos atualmente envolvem o uso de frameworks como Tailwind e
              React, além de CSS e JS puros. Desenvolvi aplicações a partir de
              APIs que são dinamicamente incorporadas na página, buscando criar
              uma experiência visualmente engajante para o usuário.
            </p>
            <p>
              Antes de iniciar meus estudos em desenvolvimento de software,
              obtive uma graduação em engenharia mecânica, certificação de
              piloto privado de aviões, certificação para atuação em
              distribuição de produtos financeiros e atuei primariamente como
              professor particular de ciências exatas e inglês.
            </p>
            <p>
              Busco uma oportunidade para desenvolver projetos maiores em
              equipe, contribuindo com o conhecimento que já tenho e aprendendo
              ainda mais sobre a área.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-thin text-2xl uppercase mt-4 lg:mt-[unset]">
            Habilidades
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
          <span className="text-white">02.</span> Projetos
        </h2>
        <div
          className={`bg-[${accentColor}] w-[10.75rem] h-1 skew-x-[-30deg]`}
        ></div>
        <div className="mt-8 space-y-6 flex flex-col w-full lg:flex-row lg:space-y-0 lg:gap-4 lg:justify-center">
          {myProjects.map((element) => (
            <div
              key={element.projectId}
              className="overflow-hidden lg:w-[30rem]"
            >
              <a href={element.projectURL} target="blank">
                <img
                  src={element.projectThumb}
                  alt={element.projectTitle}
                  className={`h-60 object-cover w-full object-left-top`}
                />
              </a>
              <div className="border px-4 py-8 space-y-4">
                <h2 className="font-bold border-b border-b-white">
                  {element.projectTitle}
                </h2>
                <p>{element.projectDescription}</p>
                <div>
                  <Button btnText="Ir para o site" url={element.projectURL} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
