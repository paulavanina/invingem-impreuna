import React from "react";
import { HeaderMegaMenu } from "../../components/Header/HeadeMegaMenu";
import BlogSinglePage from "../../components/BlogSinglePage/BlogSinglePage";
import { FooterCentered } from "../../components/footerCentered/Footer";
import { Comm } from "../../components/Comments/Comment";

const SinglePageBlog = () => {
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  return (
    <div>
      <HeaderMegaMenu />
      <BlogSinglePage />
      <FooterCentered />

    </div>
  );
};

export default SinglePageBlog;
