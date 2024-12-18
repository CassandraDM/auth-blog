import { useNavigate } from "react-router-dom";

type ButtonProps = {
  variant: "signin" | "signup" | "submit";
  type?: "button" | "submit";
  onClick?: () => void;
  text: string;
};

const style = {
  main: "px-4 py-2 text-white rounded",
  signin: "bg-blue-500 hover:bg-blue-700",
  signup: "bg-green-500 hover:bg-green-700",
  submit: "bg-blue-500 hover:bg-blue-700",
};

const Button = ({ variant, type = "button", text, ...rest }: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      className={`${style.main} ${style[variant]}`}
      onClick={() => {
        navigate(`/${variant}`);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
