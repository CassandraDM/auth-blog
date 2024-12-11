import Button from "../../components/Button";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Auth Blog!</h1>
      <p className="text-lg mb-8">Sign in or sign up to start blogging</p>
      <div className="space-x-4">
        <Button variants="signin" />
        <Button variants="signup" />
      </div>
    </div>
  );
};

export default HomePage;
