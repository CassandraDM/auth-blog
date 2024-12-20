import { useState } from "react";
import { UserDto } from "../../types/user.type";
import { authentification } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";

const SigninPage = () => {
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
      const token = await authentification(credentials);
      console.log("~ 🐈‍⬛🐈 ~ handleSubmit ~ token:", token);

      navigate("/post");
    } catch (error) {
      setErrorMessage("User not registered");
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
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
        <button>Go!</button>
        {errorMessage && <p>{errorMessage}</p>}

        <p>
          Don't have an account? <a href="/signup">Create one</a>
        </p>
      </form>
    </div>
  );
};

export default SigninPage;
