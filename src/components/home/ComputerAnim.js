import Lottie from "lottie-react";
import React from "react";
import computer from "../../assets/anims/computer.json";

function ComputerAnim() {
  return (
    <div className="w-[600px] 2xl:w-[900px]">
      <Lottie animationData={computer} loop={true} />
    </div>
  );
}

export default ComputerAnim;
