const GridItem = ({ size = 1, children, className }) => {
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
    <div className={`${colSpanClass} p-[25px] rounded-[36px] ${className}`}>
      {children}
    </div>
  );
};

export default GridItem;
