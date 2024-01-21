import BaseHeader from "@/components/baseLayout/BaseHeader";
import { ReactNode } from "react";

// Only the root layout can contain <html> and <body> tags.
interface ILayout {
  children: ReactNode;
}

const Layout = (props: ILayout) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
