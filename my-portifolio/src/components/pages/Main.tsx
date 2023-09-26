// react icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

type Props = {};

const Main = (props: Props) => {
  return (
    <main className="bg-black text-white p-8 space-y-4">
      <h1 id="home">
        <span className="text-[#49B8AC]">Olá, meu nome é</span>
        <br /> Felipe Thomé. <br /> Desenvolvo aplicações web.
      </h1>
      <p>Dev Front End</p>
      <div className="text-2xl flex gap-4">
        <a href="https://github.com/felipetn1989" target="blank">
          <FaGithub className="hover:cursor-pointer hover:text-[#49B8AC]" />
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-thome-a0094a276/"
          target="blank"
        >
          <FaLinkedin className="hover:cursor-pointer hover:text-[#49B8AC]" />
        </a>
        <a href="https://instagram.com/ftn1989" target="blank">
          <FaInstagram className="hover:cursor-pointer hover:text-[#49B8AC]" />
        </a>
      </div>
      <div id="about">
        <h2>01. Sobre</h2>
        <p>Recentemente resolvi me desafiar no mundo da programação para aprender novas habilidades e desde então, descoberto esse novo interesse, passei a desenvolver aplicações web baseadas em JavaScript, focando em design responsivo e mobile-first. Meus projetos atualmente envolvem o uso de frameworks como Tailwind e React, além de CSS e JS puros. Desenvolvi aplicações a partir de APIs que são dinamicamente incorporadas na página, buscando criar uma experiência visualmente engajante para o usuário.</p>
        <p>Antes de iniciar meus estudos em desenvolvimento de software, obtive uma graduação em engenharia mecânica, certificação de piloto privado de aviões, certificação para atuação em distribuição de produtos financeiros e atuei primariamente como professor particular de ciências exatas e inglês.</p>
        <p>Busco uma oportunidade para desenvolver projetos maiores em equipe, contribuindo com o conhecimento que já tenho e aprendendo ainda mais sobre a área.</p>
      </div>
    </main>
  );
};

export default Main;
