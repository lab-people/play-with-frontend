import React, { ReactNode } from "react";

// Only the root layout can contain <html> and <body> tags.

interface ILayout {
  children: ReactNode;
}

const Layout = (props: ILayout) => {
  const { children } = props;

  return (
    <section>
      {/* <title>Main</title>
      <meta name="title" key="title" content="Main" /> */}
      {children}
    </section>
  );
};

export default Layout;
