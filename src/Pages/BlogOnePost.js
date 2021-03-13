import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Code from "../Components/Code";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  return builder.image(source);
};

const BlogOnePosts = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  console.log(useParams());

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
               }
             },
           body,
          "name": author->name,
          "authorImage": author->image,
         }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="blog-post-container">
      <div className="title">
        <h1>{postData.title}</h1>
      </div>
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
          serializers={Code}
        />
      </div>
    </div>
  );
};

export default BlogOnePosts;
