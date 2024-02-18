import React from "react";
import { values } from "../data";
import { ValueItem } from "./ValueItem";
import Container from "./Container";

export const Values = () => {
  return (
    <Container bgColor="bg-slate-100">
      <h1 className="bg-gradient-to-r text-transparent from-green-800 via-black to-cyan-500 font-extrabold bg-clip-text text-3xl lg:text-7xl my-5 text-center md:text-center">
        Our core values
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {values.map((item) => (
          <ValueItem key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
};
