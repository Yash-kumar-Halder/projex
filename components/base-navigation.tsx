import React from "react";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

const BaseNavigation = () => {
  return <div className="w-full h-10 flex items-center justify-between fixed left-1/2 px-[5vmin] pr-[10vmin] -translate-x-1/2 ">
    <h1 className="font-extrabold text-[#fd6500] " >PROJEX</h1>
    <ul className="flex gap-5 font-semibold" >
        <li>Hello</li>
        <li>Project</li>
        <li>Hello</li>
        <li>Project</li>
    </ul>
    <div className="flex items-center gap-6" >
    <button className="flex items-center gap-1 font-semibold cursor-pointer hover:text-[#fd6500] " ><LogIn size={16} />Login</button>
    <Button className="shadow-xl h-fit py-1.5 cursor-pointer" >Signup</Button>
    </div>
    </div>;
};

export default BaseNavigation;
