import React from 'React';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        author
        title
      }
      body
    }
  }
`;
const PostTemplate = ({ data: { mdx: post } }) => {
  //find the post by using slug

  //execute graphql query by using slug
  return (
    <Layout>
      <section class="section">
        <div class="container">
          <h1 class="title">{post.frontmatter.title}</h1>
          <p className="is-small">
            Posted by <strong>{post.frontmatter.author}</strong>
          </p>
          <MDXRenderer>{post.body}</MDXRenderer>
          <Link to="/">Back to all posts</Link>
        </div>
      </section>
    </Layout>
  );
};

export default PostTemplate;
