import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import blogPost from "../../data/blog.json";

/**
 * @author
 * @function Post
 **/

export const Post = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return posts.map((post) => {
    return (
      <div className="post">
        <Link key={post.id} className="link" to={`/post/${post.slug}`}>
          <img
            src={require(`../../assets/${post.blogImage}`)}
            alt="convention"
            className="postImg"
          />
        </Link>
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">{post.blogCategory}</span>
            <span className="postCat">events</span>
          </div>
          <Link className="link" to={`/post/${post.slug}`}>
            <span className="postTitle">{post.blogTitle}</span>
          </Link>
          <hr />
          <span className="postDate">{post.postedOn} </span>
        </div>
        <p className="postDesc">{post.blogText}</p>
      </div>
    );
  });
};
