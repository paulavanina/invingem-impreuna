import React from "react";
import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu";
import BlogSinglePage from "../../components/BlogSinglePage/BlogSinglePage";
import { FooterLinks } from "../../components/Footer/FooterLinks";
import { FooterCentered } from "../../components/footerCentered/Footer";

const SinglePageBlog = () => {
  return (
    <div>
      <HeaderMegaMenu />
      <BlogSinglePage />
      <FooterCentered />
    </div>
  );
};

export default SinglePageBlog;
