import PropTypes from "prop-types";

const Rombo = ({ className, textContent, font, size }) => {
  
  const sizeClass = {
    xs: "w-20 h-20",
    sm: "w-28 h-28",
    md: "w-40 h-40",
    lg: "w-60 h-60",
    xl: "w-96 h-96",
  }[size];

  const fontClass = {
    xs: "text-sm",
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-5xl",
  }[font];

  return (
      <div 
      className={`${className} block rotate-45 rounded-3xl shadow-md bg-blue shadow-aqua hover:shadow-lima cursor-pointer`}>
        <div className={`${sizeClass} ${fontClass} border-4 border-lima text-lima rounded-3xl flex items-center justify-center hover:bg-purple transition-all duration-150 ease-linear`}>
        <div className={`-rotate-45 font-bold`}>
          {textContent}
        </div>
        </div>
      </div>
  );
};

Rombo.propTypes = {
  className: PropTypes.string,
  textContent: PropTypes.node.isRequired,
  font: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Rombo;
