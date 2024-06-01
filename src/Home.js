import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "website1", body: "lorem...", author: "mario", id: 1 },
    { title: "website2", body: "lorem...", author: "luigi", id: 2 },
    { title: "website3", body: "lorem...", author: "mario", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
