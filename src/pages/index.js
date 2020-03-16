import React from 'react';
import Layout from '../components/layout';

import '../../src/styles.scss';
import usePosts from '../hooks/use-posts';
import PostView from '../components/post-view';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

export default () => {
  const posts = usePosts();
  const result = useStaticQuery(graphql`
    query {
      code: file(relativePath: { eq: "code.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Learn Gatsby</h1>
            <h2 className="subtitle">
              You will learn how to find fast static websites using Gatsby
            </h2>
          <Img fluid={result.code.sharp.fluid}/>
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
