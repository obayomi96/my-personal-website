import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log("jjj", data.site.siteMetadata.title);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
