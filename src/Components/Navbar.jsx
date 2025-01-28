import React from "react";
import SplitText from "./SplitText";


const Navbar = () => {
  return (
    <nav className=" text-gray-50 flex justify-between items-center">
      
      <SplitText
  text="Hello, Tailwind!"
  className="text-7xl "
  delay={100}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  />
    </nav>
  );
};

export default Navbar;
