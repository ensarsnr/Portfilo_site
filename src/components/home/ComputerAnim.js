import Lottie from "lottie-react";
import React from "react";
import computer from "../../assets/anims/computer.json";
import catDeveloper from "../../assets/img/catDeveloper.png";
function ComputerAnim() {
  return (
    <div className="w-[600px] p-8 2xl:w-[900px]">
      {/* <Lottie animationData={computer} loop={true} /> */}
      <img src={catDeveloper} className="rounded-md shadow-xl" />
    </div>
  );
}

export default ComputerAnim;
