import Typewriter from "react-typewriter-effect";

const MyComponent = () => {
  return (
    <Typewriter
      textStyle={{ fontSize: "1.5em", fontFamily: "monospace" }}
      startDelay={100}
      cursorColor="black"
      multiText={[
        "Hello, this is the typewriter effect!",
        "Enjoy the typing animation.",
      ]}
      multiTextDelay={1000}
      typeSpeed={100}
    />
  );
};
