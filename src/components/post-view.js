import React from 'React';
import { Link } from 'gatsby';

const PostView = ({ post }) => (
  <div className="box">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{post.title}</strong>
            <br />
            {post.excerpt.slice(0, 200)}
            <br />
            <Link to={post.slug}>Read this post</Link>
          </p>
        </div>
      </div>
    </article>
  </div>
);

export default PostView;
