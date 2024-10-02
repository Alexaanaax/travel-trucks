import css from "./BtnWrapper.module.css";

const BtnWrapper = ({
  type = "button",
  onClick,
  children,
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      className={`${css.btnWrapper} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BtnWrapper;
