"use client";
import React , {useState, useRef} from "react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Button } from "./moving-border";
import { MdOutlineContentCopy } from "react-icons/md";


export function Connect() {
    const [copied, setCopied] = useState(false);
    const emailRef = useRef(null);
    const email = "your.email@example.com";
    const handleCopy = () => {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    };

  return (
    // <div className="w-full mx-auto h-full rounded-md overflow-hidden">

    //   <h2 className="text-white text-2xl md:text-6xl font-bold">
    //     Connect with me
    //   </h2>
    //   <p className="text-white text-sm md:text-2xl max-w-xl mt-6">
    //     Email: {email}
    //   </p>
    //   <button
    //     className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
    //     onClick={handleCopy}
    //   >
    //     {copied ? "Copied!" : "Copy email address"}
    //   </button>

    // </div>
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
        <div className="mb-4">
        <p className="text-l md:text-3xl md:mb-4">Interested in Collaborating with me?</p>
        <p className="text-xs md:text-xl">Click the Button below, I'll be waiting for your email</p>
        </div>
        <Button>Copy Email Address <MdOutlineContentCopy className="ml-2 h-4 w-4" /> </Button>
      </div>
    </BackgroundGradientAnimation>
  );
}
