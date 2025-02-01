import React from "react";
import TrueFocus from "./TrueFocus";
import Magnet from "./Magnet";
import DecryptedText from "./DecryptedText/DecryptedText";

const Navbar = () => {
  const navItems = ["services", "solution", "career", "company", "blog"];
  return (
    <nav className=" text-gray-50 flex justify-between items-center relative z-10 ">
      <TrueFocus
        sentence="Hash Verse"
        manualMode={true}
        blurAmount={5}
        borderColor="#CA3500"
        animationDuration={0.5}
        pauseBetweenAnimations={0}
      />

      <div className="flex gap-10  cursor-pointer">
        {navItems.map((item, index) => (
         <DecryptedText text={item.toUpperCase()} speed={100}
         maxIterations={20} key={index}  className="font-bold"/>

        ))}
      </div>

    
        <Magnet padding={100} disabled={false} magnetStrength={5}>
          <button className="bg-orange-700 text-gray-50 h-12 w-32 text-sm font-bold rounded-lg cursor-pointer">CONTACT US</button>
        </Magnet>
     
    </nav>
  );
};

export default Navbar;
