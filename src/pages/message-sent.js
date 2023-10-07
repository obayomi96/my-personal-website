import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const messageSsent = () => {
  return (
    <Layout pageTitle="Message Sent Successfully">
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>
          Your message has been sent!, you'll hear back from me soon. Thanks for
          reaching out.
        </p>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>
      <Seo title="Message Sent" />
    </title>
  </>
);

export default messageSsent;
