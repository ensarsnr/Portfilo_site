import React from "react";
import TitleWriter from "./TitleWriter";

function Title() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Name Surname 👋</h1>
      <div>
        <h1 className="text-2xl font-bold mt-5 text-[#5C8374] text-center">
          <TitleWriter />
        </h1>
      </div>
    </div>
  );
}

export default Title;
