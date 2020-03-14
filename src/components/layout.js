import React from 'react';
import Header from './header';

const Layout = ({ children }) => (
  <div style={{ margin: '0 auto' }}>
    <Header></Header>
    <main>{children}</main>
    <footer>This is footer</footer>
  </div>
);
export default Layout;
