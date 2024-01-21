'use client';
import BaseHeader from "@/components/baseLayout/BaseHeader";
import { Layout } from "antd";
import React from "react";


// In terms of nesting, template.js is rendered between a layout and its children. Here's a simplified output:
const template = () => {

  const {Header} = Layout
  return (
    <Layout>
      <BaseHeader />
    </Layout>
  );
};

export default template;
