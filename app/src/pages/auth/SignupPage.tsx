import { useState } from "react";
import { UserDto } from "../../types/user.type";
import { register } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";

const SignupPage = () => {
  const [credentials, setCredentials] = useState<UserDto>({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await register(credentials);
      console.log("~ 🐈‍⬛🐈 ~ handleSubmit ~ token:", token);
      navigate("/signin");
    } catch (error) {
      setErrorMessage("User not created");
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button>Create!</button>
        {errorMessage && <p>{errorMessage}</p>}

        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
