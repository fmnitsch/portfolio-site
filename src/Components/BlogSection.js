import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2>I also keep a blog</h2>
      <p>
        It's mostly code-related with a few of my personal interests in the mix.
      </p>
      <p>
        You can check it out <Link to="/blog">here</Link>.
      </p>
    </div>
  );
};

export default BlogSection;
