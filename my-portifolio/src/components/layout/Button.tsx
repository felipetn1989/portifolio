import React from "react";

type Props = {
  btnText: string;
  url: string;
};

const Button = ({ btnText, url }: Props) => {
  return (
    <button className="bg-[#5c7ea2] text-white px-4 py-2 rounded-xl">
      <a href={url} target="blank">
        {btnText}
      </a>
    </button>
  );
};

export default Button;
