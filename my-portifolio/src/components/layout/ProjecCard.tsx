// interfaces

import { FaGithub } from "react-icons/fa";
import { Iproject } from "../interfaces/IProjects";

// components
import Button from "./Button";

const ProjecCard = () => {
  const myProjects: Iproject[] = [
    {
      projectId: "ipTracker",
      projectTitle: "IP Address Tracker",
      projectThumb: "../../../public/IpTrackerThumbnail.png",
      projectURL: "https://felipetn1989.github.io/ip-address-tracker-master/",
      codeURL: "https://github.com/felipetn1989/ip-address-tracker-master",
      projectDescription:
        "Tracker de endereço IP. O usuário coloca um IP (formato IPv4) na barra de busca e o site irá mostrar os dados deste IP, como dono e fuso horário, e sua localização em um mapa. Projeto com React e Tailwind, utilizando duas API's, uma para o IP e outra para a localização no mapa.",
    },
    {
      projectId: "urlShort",
      projectTitle: "Encurtador de Links",
      projectThumb: "../../../public/urlShortenerLink.png",
      projectURL: "https://felipetn1989.github.io/url-shortening-api-master/",
      codeURL: "https://github.com/felipetn1989/ip-address-tracker-master",
      projectDescription:
        "Projeto de um site com API em que, na barra de texto, o usuário pode colocar um link e a aplicação irá retornar uma versão curta do link. O projeto ainda conta com uma função de copiar para área de transferência e uma lista de links encurtados gerados dinamicamente.",
    },
    {
      projectId: "tipCalculator",
      projectTitle: "Calculadora de gorjeta",
      projectThumb: "../../../public/tipCalculator.png",
      projectURL: "https://felipetn1989.github.io/tip-calculator-app-main/",
      codeURL: "https://github.com/felipetn1989/tip-calculator-app-main",
      projectDescription:
        "Nesta calculadora, o usuário pode inserir o valor total da conta, a quantidade de pessoas no grupo e a porcentagem da gorjeta (com opção de valor customizado fora dos valores padrões mostrados no aplicativo. Enquanto o usuário digita os valores, o programa calcula o valor por pessoa e a gorjeta",
    },
  ];

  return (
    <>
      {myProjects.map((element) => (
        <div key={element.projectId} className="overflow-hidden lg:w-[30rem]">
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
            <div className="flex justify-between">
              <Button btnText="Ir para o site" url={element.projectURL} />
              <a href={element.codeURL} target="blank">
                <FaGithub className="bg-[#5c7ea2] w-8 h-8 p-1 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjecCard;
