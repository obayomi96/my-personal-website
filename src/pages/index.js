import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my personal Website">
      <div
        style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}
      >
        <div>
          <p>
            Hi there! thanks for stopping by, I'm <b>Martins</b>, I'm full-stack
            developer from Lagos, Nigeria.
          </p>
        </div>
        <div>
          <StaticImage alt="Intro" src="../images/image-intro.gif" />
        </div>
      </div>
      <p>
        P.S: I built this website from scratch with{" "}
        <a href="https://www.gatsbyjs.com/docs/">Gatsby</a>.
      </p>
    </Layout>
  );
};

export const Head = () => (
  <title>
    <Seo title="Home" />
  </title>
);

export default IndexPage;
