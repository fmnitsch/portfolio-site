import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const BlogAllPosts = ({ setLocation }) => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setAllPosts(data))
      .then(() => setLocation("blog"))
      .catch(console.error);
  }, [setLocation]);

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>A few things I've written</h1>
        <p>Case studies, code challenges, and some of my personal interests</p>
      </header>
      <section className="posts-container">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
              <div className="single-post-container" key={index}>
                <div className="image-title-wraper">
                  <img src={post.mainImage.asset.url} alt={post.title} />
                  <p className="title">{post.title}</p>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
};

export default BlogAllPosts;
