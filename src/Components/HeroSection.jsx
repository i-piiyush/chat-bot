import React from "react";
import ShapeBlur from "./ShapeBlur/ShapeBlur";
import TextPressure from "./TextPressure/TextPressure";

const HeroSection = () => {
  return (
    <div>
      <div className=" w-full h-[90vh] relative flex justify-center items-center">
         


  <TextPressure
      text={"Hello\nWorld\nReact"}

    flex={false}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={32}
    
   
  />
  
  

      </div>
      <div className=" w-full h-[100vh] absolute top-0 left-0">
        {/* <div
          style={{ position: "relative", height: "100%", overflow: "hidden" }}
          className=""
        >
          <ShapeBlur
            variation={0}
            pixelRatioProp={window.devicePixelRatio || 1}
            shapeSize={1.5}
            roundness={1.5}
            borderSize={0.05}
            circleSize={0.1}
            circleEdge={0.7}
          />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
