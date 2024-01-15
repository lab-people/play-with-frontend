import React from "react";
import Layout from "./layout";

// In terms of nesting, template.js is rendered between a layout and its children. Here's a simplified output:
const template = () => {
  return (
    <Layout>
      <div>template</div>
    </Layout>
  );
};

export default template;
