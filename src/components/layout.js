import React from 'react';

const Layout = ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: 650, padding: `0 1rem` }}>
    <header>LearnGatsby</header>
    <main>{children}</main>
    <footer>This is footer</footer>
  </div>
);
export default Layout;
