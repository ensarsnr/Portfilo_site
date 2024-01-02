import React from "react";
import Typewriter from "typewriter-effect";

function TitleWriter() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "Backend Developer",
            "Frontend Developer",
            "Mobile Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 40,
        }}
      />
    </div>
  );
}

export default TitleWriter;
