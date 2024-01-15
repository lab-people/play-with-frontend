import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  type?: "main" | "calander";
  menu?: ReactNode;
};

const Container = (props: Props) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no,initial-scale=1.0"
        />
        <meta name="description" key="description" content="desc 입니다" />
        <meta name="title" key="title" content={`wow1`} />
        <meta property="og:title" key="og:title" content={`wow1`} />
        <meta property="og:locale" key="og:locale" content="ko_KR" />
      </Head>
    </>
  );
};

export default Container;
