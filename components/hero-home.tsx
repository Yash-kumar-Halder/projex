import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Circle } from "lucide-react";

const Herohome = () => {
  return (
    <div>
      <div className="w-full px-[5vmin] h-screen content-center bg-neutral-200">
        <div className="w-fit h-8 rounded-full bg-orange-300/40 flex items-center gap-1.5 px-4 pr-5"><Circle size={13} fill="#fd6500" stroke="#ffffff00" className="h-fit" /> <p className="text-[#fd6500] font-semibold" >200+ active workspace</p></div>
        <h1 className="text-[5vmin] leading-[5.5vmin] font-bold">
          Less Chaos, More Clarity{" "}
        </h1>
        <h1 className="text-[6vmin] leading-[6.5vmin] font-extrabold">
          Manage Projects the Smart Way.
        </h1>
        <Button className="my-5 shadow-lg shadow-neutral-700 cursor-pointer ">
          Create you first workspace<ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Herohome;
