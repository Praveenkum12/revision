import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/userSlice";
import { formatDistanceToNow, parseISO } from "date-fns";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  function onTitleChanged(e) {
    setTitle(e.target.value);
  }

  function onContentChanged(e) {
    setContent(e.target.value);
  }

  function onAuthorChange(e) {
    setUserId(e.target.value);
  }

  function onSavePostClicked() {
    // if (!title || !content) return;
    setTitle("");
    setContent("");
    dispatch(postAdded(title, content, userId));
    const x = new Date("sept 15 2023").toISOString();
    const date = parseISO(x);
    const y = formatDistanceToNow(date);
    console.log(y);
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postContent">Post Content</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <label htmlFor="author">Author</label>
        <select
          name="author"
          id="author"
          value={userId}
          onChange={onAuthorChange}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
