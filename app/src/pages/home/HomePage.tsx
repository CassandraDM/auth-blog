const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Auth Blog!</h1>
      <p className="text-lg mb-8">Sign in or sign up to start blogging</p>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Sign In
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HomePage;
