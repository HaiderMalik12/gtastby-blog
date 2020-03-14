import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import '../../src/styles.scss';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h3>Welcome to Gatsby I am learning Gatsby</h3>
      <p>
        <Link to="/contact">Contact Us</Link>
      </p>
      {/* display all the blog post content here */}
      {posts.map(p => (
        <>
          <h1>{p.title}</h1>
          <p>{p.excerpt}</p>
        </>
      ))}
    </Layout>
  );
};
