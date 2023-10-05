// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm Martins. I'm the proud creator of this site, which I built
        with Gatsby... More to come!
      </p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Martins Obayomi | About</title>
    <meta name="description" content="Martins Obayomi, Lagos Nigeria" />
  </>
);

// Step 3: Export your component
export default AboutPage;
