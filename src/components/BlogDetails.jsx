import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const history = useHistory();

 const handleDelet = () => {
   fetch("http://localhost:8000/blogs/" + blog.id, {
     method: "DELETE",
   }).then(() => {
     history.push("/");
   });
 };


  const { id } = useParams();
  const {
    error,
    isPending,
    data: blog,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by: {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={handleDelet}>delet blog</button>
        </article>
      )}
    </div>
  ); 
};

export default BlogDetails;
