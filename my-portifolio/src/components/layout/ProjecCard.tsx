// interfaces
import { Iproject } from "../interfaces/IProjects";

// react-icons
import { FaGithub } from "react-icons/fa";

// components
import Button from "./Button";

// images
import thumbIpTracker from "../../assets/images/IpTrackerThumbnail.png";
import urlThumb from "../../assets/images/urlShortenerLink.png";
import tipCalcThumb from "../../assets/images/tipCalculator.png";

// css styles
import style from "./ProjectCard.module.css";

type Props = {
  language: string;
};

const ProjecCard = ({ language }: Props) => {
  const myProjects: Iproject[] = [
    {
      projectId: "ipTracker",
      projectTitle: "IP Address Tracker",
      projectThumb: thumbIpTracker,
      projectURL: "https://felipetn1989.github.io/ip-address-tracker-master/",
      codeURL: "https://github.com/felipetn1989/ip-address-tracker-master",
      projectDescriptionPT:
        "Tracker de endereço IP. O usuário coloca um IP (formato IPv4) na barra de busca e o site irá mostrar os dados deste IP, como dono e fuso horário, e sua localização em um mapa. Projeto com React e Tailwind, utilizando duas API's, uma para o IP e outra para a localização no mapa.",
      projectDescriptionEN:
        "IP Address Tracker. The user enters an IPv4 formatted IP address in the search bar, and the website will display the data associated with this IP, such as the owner and time zone, along with its location on a map. The project is built with React and Tailwind CSS, utilizing two APIs, one for the IP information and another for mapping the location.",
    },
    {
      projectId: "urlShort",
      projectTitle: "URL Link Shortening",
      projectThumb: urlThumb,
      projectURL: "https://felipetn1989.github.io/url-shortening-api-master/",
      codeURL: "https://github.com/felipetn1989/ip-address-tracker-master",
      projectDescriptionPT:
        "Projeto de um site com API em que, na barra de texto, o usuário pode colocar um link e a aplicação irá retornar uma versão curta do link. O projeto ainda conta com uma função de copiar para área de transferência e uma lista de links encurtados gerados dinamicamente.",
      projectDescriptionEN:
        "Project of a website with an API in which, in the text input bar, the user can enter a link, and the application will return a shortened version of the link. The project also includes a copy-to-clipboard function and a dynamically generated list of shortened links.",
    },
    {
      projectId: "tipCalculator",
      projectTitle: "Tip Calculator",
      projectThumb: tipCalcThumb,
      projectURL: "https://felipetn1989.github.io/tip-calculator-app-main/",
      codeURL: "https://github.com/felipetn1989/tip-calculator-app-main",
      projectDescriptionPT:
        "Nesta calculadora, o usuário pode inserir o valor total da conta, a quantidade de pessoas no grupo e a porcentagem da gorjeta (com opção de valor customizado fora dos valores padrões mostrados no aplicativo. Enquanto o usuário digita os valores, o programa calcula o valor por pessoa e a gorjeta",
      projectDescriptionEN:
        "In this calculator, the user can enter the total charge, the number of people in the group, and the tip percentage (with an option for custom values outside of the default values shown in the app). As the user enters the values, the program calculates the amount per person and the tip.",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center gap-6 lg:flex-row lg:flex-wrap">
      {myProjects.map((element) => (
        <div
          key={element.projectId}
          className={`lg:w-[25rem] lg: h-fit ${style.cardBox}`}
        >
          <div className={style.infoDiv}>
            <a href={element.projectURL} target="blank">
              <img
                src={element.projectThumb}
                alt={element.projectTitle}
                className={`h-60 object-cover w-full object-left-top`}
              />
            </a>
            <div className="px-4 py-8 space-y-4 bg-[#293c50]">
              <h2 className="font-bold border-b border-b-white">
                {element.projectTitle}
              </h2>
              <p>
                {language === "PT"
                  ? element.projectDescriptionPT
                  : element.projectDescriptionEN}
              </p>
              <div className="flex justify-between items-center">
                <Button
                  btnText={
                    language === "PT" ? "Ir para o site" : "Go to website"
                  }
                  url={element.projectURL}
                />
                <a href={element.codeURL} target="blank">
                  <FaGithub className="bg-[#5c7ea2] w-8 h-8 p-1 rounded-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjecCard;
