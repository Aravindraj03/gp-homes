import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Header from "../common/header";
import Footer from "../common/footer";
import PostBanner from "./post-banner";
import Post from "./post-details";
import postsData from "./postsData";

function PostPage() {
  const { slug } = useParams();

  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  console.log("Post data:", post.meta_title, post.meta_description);
  return (
    <Fragment>
      <Helmet>
        <title>{post.meta_title}</title>

        <meta
          name="description"
          content={post.meta_description}
        />

        <link
          rel="canonical"
          href={`https://www.gphomes.in/post/${post.slug}`}
        />
      </Helmet>

      <Header />
      <PostBanner post={post} />
      <Post post={post} />
      <Footer />
    </Fragment>
  );
}

export default PostPage;