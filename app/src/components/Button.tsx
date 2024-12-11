import { useNavigate } from "react-router-dom";

type ButtonProps = {
  variants: "signin" | "signup";
};

const Button = ({ variants }: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      className={`px-4 py-2 text-white rounded  ${
        variants === "signin"
          ? "bg-blue-500 hover:bg-blue-700"
          : "bg-green-500 hover:bg-green-700"
      }`}
      onClick={() => {
        navigate(`/${variants}`);
      }}
    >
      {variants === "signin" ? "Sign In" : "Sign Up"}
    </button>
  );
};

export default Button;
