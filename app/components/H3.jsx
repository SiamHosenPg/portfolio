import React from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  variable: "--font-pacifico-sans",
  weight: ["400"],
  subsets: ["latin"],
});

const H3 = ({ text, varient }) => {
  return (
    <span
      className={`${pacifico.className} block ${
        varient === "normal"
          ? "text-lg"
          : varient === "lg"
          ? "text-2xl"
          : varient === "xlg"
          ? "text-4xl"
          : "text-base"
      }`}
    >
      {text}
    </span>
  );
};

export default H3;
