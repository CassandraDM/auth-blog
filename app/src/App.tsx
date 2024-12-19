import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListPage from "./pages/user/UserListPage";
import PostListPage from "./pages/post/PostListPage";
import PostSinglePage from "./pages/post/PostSinglePage";
import HomePage from "./pages/home/HomePage";
import Layout from "./components/Layout";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import UserSinglePage from "./pages/user/UserSinglePage";
import PostEditPage from "./pages/post/PostEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="post" element={<PostListPage />} />
          <Route path="post/:id" element={<PostSinglePage />} />
          <Route path="post/edit/:id" element={<PostEditPage />} />
          <Route path="user" element={<UserListPage />} />
          <Route path="user/:id" element={<UserSinglePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
