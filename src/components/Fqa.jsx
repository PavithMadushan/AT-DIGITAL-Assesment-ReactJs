import React from "react";
import Accordionaction from "./Accordionaction";

function Fqa() {
  return (
    <div className="flex justify-center flex-col mt-10">
      <h1 className="flex md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-purple-700 justify-center">
        Frequently asked questions
      </h1>
      <div className="max-w-full py-9">
        <Accordionaction />
      </div>
    </div>
  );
}

export default Fqa;
