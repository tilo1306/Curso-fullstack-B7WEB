import React from "react";
type Props = {
  text: string;
  clickFn: (txt: string) => void;
};

export const Button = ({ text, clickFn }: Props) => {
  const handleClick = () => {
    clickFn("frase");
  };
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};
