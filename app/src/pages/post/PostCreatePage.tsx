const PostCreatePage = () => {
  return (
    <div>
      <h1>Create a Post!</h1>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" />
        </div>
        <div>
          <label htmlFor="imagePath">Image Path</label>
          <input type="text" id="imagePath" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default PostCreatePage;
