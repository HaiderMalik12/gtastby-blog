import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div style={{ margin: '0 auto' }}>
      <Helmet>
        <html lang="en"></html>
        <title>{title}</title>
        <meta content={description} name={title}></meta>
      </Helmet>
      <Header></Header>
      <main>{children}</main>
      <footer>This is footer</footer>
    </div>
  );
};
export default Layout;
