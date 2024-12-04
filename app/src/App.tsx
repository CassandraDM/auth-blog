import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListPage from "./pages/user/UserListPage";
import PostListPage from "./pages/post/PostListPage";
import PostSinglePage from "./pages/post/PostSinglePage";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Posts</Link>
        <Link to="/user">Users</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<PostListPage />} />
          <Route path="/:id" element={<PostSinglePage />} />
          <Route path="/user" element={<UserListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
