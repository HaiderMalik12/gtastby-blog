import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import '../../src/styles.scss';

export default () => (
  <Layout>
    <h3>Welcome to Gatsby I am learning Gatsby</h3>
    <p>
      <Link to="/contact">Contact Us</Link>
    </p>
  </Layout>
);
