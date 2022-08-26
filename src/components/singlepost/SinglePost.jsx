import React, { useState, useEffect } from "react";
import "./singlePost.css";
import blogPost from "../../data/blog.json";
/**
 * @author
 * @function SinglePost
 **/

export const SinglePost = (props) => {
  console.log(props);
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = blogPost.data.find((post) => post.slug == slug);
    setPost(post);
    setSlug(slug);
  }, [post, props.match.params.slug]);

  if (post.blogImage == "") return null;
  return (
    <div className="singlePost">
      <div className="singlePostWrapper"></div>
      <img
        src={require("../../assets/" + post.blogImage)}
        alt="bsv-convention"
        className="singlePostImg"
      />
      <h1 className="singlePostTitle">
        {post.blogTitle}
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">{post.author}</span>
        <span className="singlePostDate">{post.postedOn}</span>
      </div>
      <p className="singlePostDesc">{post.blogText}</p>
    </div>
  );
};
