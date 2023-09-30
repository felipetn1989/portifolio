type Props = {
  btnText: string;
  url?: string;
  font?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ btnText, url, font, handleClick }: Props) => {
  return (
    <button
      className={`bg-[#5c7ea2] text-white px-4 py-2 rounded-xl ${font}`}
      onClick={handleClick}
    >
      <a href={url} target="blank">
        {btnText}
      </a>
    </button>
  );
};

export default Button;
