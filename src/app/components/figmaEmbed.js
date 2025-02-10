const FigmaEmbed = ({ src }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <iframe
        className="w-full max-w-4xl h-[450px] sm:h-[300px]"
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        src={src}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FigmaEmbed;
