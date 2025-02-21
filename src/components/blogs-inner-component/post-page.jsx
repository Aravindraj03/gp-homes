import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import Header from "../common/header";
import Footer from "../common/footer";
import PostBanner from "./post-banner";
import Post from "./post-details";
import postsData from "./postsData";


function PostPage() {

  const { slug } = useParams(); 
  const post = postsData.find((p) => p.slug === slug); 

  if (!post) {
    return <h2>
      Post not found</h2>;
  }

  return (
    <Fragment>
      <Header />
      <PostBanner post={post} />
      <Post post={post} />     
      <Footer />
    </Fragment>
  );
}

export default PostPage;
