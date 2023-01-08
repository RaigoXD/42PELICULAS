const Button = ({ text, type }) => {
  let HtmlButton = (
    <button
      className={
        `py-2 px-5 rounded-2xl text-white text-xl duration-100 w-32 ` +
        (type === "1" ? `bg-primary hover:shadow-primary` : ``)
      }
    >
      {text}
    </button>
  );
  return HtmlButton;
};

export default Button;
