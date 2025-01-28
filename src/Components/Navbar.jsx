import React from "react";
import ShinyText from "../../components/ShinyText/ShinyText";
import SplitText from "../../components/SplitText/SplitText";

const Navbar = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <nav className=" text-gray-50 flex justify-between items-center">
     

      <ShinyText
        text="Just some shiny text!"
        disabled={false}
        speed={3}
        className="text-3xl"
      />
    </nav>
  );
};

export default Navbar;
