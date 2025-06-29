const GridItem = ({ size = 1, children, className, ...props }) => {
  let colSpanClass;

  switch (size) {
    case 1:
      colSpanClass = "col-span-1";
      break;
    case 2:
      colSpanClass = "col-span-2";
      break;
    case 3:
      colSpanClass = "col-span-3";
      break;
    default:
      colSpanClass = "col-span-1";
  }

  return (
    <div
      className={`${colSpanClass} p-[25px] rounded-[36px] ${className} focus:outline-none focus:ring-2 focus:ring-light-orange focus:ring-opacity-50 transition-all duration-200`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GridItem;
