import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import '../../src/styles.scss';
import usePosts from '../hooks/use-posts';
import PostView from '../components/post-view';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Learn Gatsby</h1>
            <h2 className="subtitle">
              You will learn how to find fast static websites using Gatsby
            </h2>
          </div>
        </div>
      </section>
      <hr />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Read my Blog</h1>
            {posts.map(p => (
              <PostView key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
