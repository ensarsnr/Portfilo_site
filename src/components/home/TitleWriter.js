import React from "react";
import Typewriter from "typewriter-effect";

function TitleWriter() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "Hello!",
            "Bonjour!",
            "Hola!",
            "Hallo!",
            "Merhaba!",
            "Ciao!",
            "你好",
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
