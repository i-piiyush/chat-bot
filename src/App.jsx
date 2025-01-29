import React from "react";
import Navbar from "./Components/Navbar";
import TrueFocus from "./TrueFocus";

function App() {


  return (
    <>
    
      <Navbar />
      <TrueFocus 
      sentence="True Focus"
      manualMode={true}
      blurAmount={5}
      borderColor="#FFC300 "
      animationDuration={0.5}
      pauseBetweenAnimations={0}
      
      />
    
    </>
  );
}

export default App;
