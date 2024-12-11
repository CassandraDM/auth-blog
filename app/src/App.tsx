import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListPage from "./pages/user/UserListPage";
import PostListPage from "./pages/post/PostListPage";
import PostSinglePage from "./pages/post/PostSinglePage";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/Layout";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="post" element={<PostListPage />} />
          <Route path=":id" element={<PostSinglePage />} />
          <Route path="user" element={<UserListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
