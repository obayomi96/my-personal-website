// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ContactForm from "../components/contactForm";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                width: "200px",
                height: "200px",
                borderRadius: "100%",
              }}
            >
              <StaticImage
                width={200}
                height={200}
                alt="Profile headshot"
                src="../images/my-image.png"
              />
            </div>
          </div>
        </div>
        <p>
          <b>Experience</b>
        </p>
        <p>
          I have four years of professional experience in web developmemt using
          JavaScript, React, and NodeJS. Having graduated from a rigorous
          Bootcamp at Andela in 2019, I have successfully worked with several
          fast-paced, cross-cultural, distributed, high-performing engineering
          teams.
        </p>
        <p>
          I have a strong background in using JavaScript and related libraries
          for technical problem-solving, and a proven ability to quickly learn
          and adapt to new tools and technologies; I also have a keen interest
          in building small useful tools and putting them out for public use,
          I’m an open-source enthusiast.
        </p>
        <p>
          I'm always interested in working with any team that is constantly
          innovating or inventing new ways of making things better. My
          objectives are to deliver value as soon as possible by aligning with
          the business model & mission, and dedicating myself to using industry
          best practices to solve technical problems and build useful things.
        </p>
        <p>
          Some of my work includes being on the core dev-team that built{" "}
          <a href="https://templehs.com">TempleHS</a>, I also built{" "}
          <a href="https://chrome.google.com/webstore/detail/blink-alert/ecdcckdocbdegecfpmdgblfaiaplggob">
            Blink Alert
          </a>
          , and a few other tools and contributions.
        </p>
        <p>
          You can follow the rest of my work & contributions on my{" "}
          <a href="https://github.com/obayomi96">Github</a>
        </p>
        <p>
          <b>Interests</b>
        </p>
        <p>
          I enjoy coffee and I constantly explore different brewing methods, I'm
          a plant enthusiast and I enjoy birding. I also have interest in arts,
          sports, and the beach on a cool day.
        </p>
        <p>
          <b>Connect with me</b>
        </p>
        <p>
          Feel free to check my{" "}
          <a href="https://www.linkedin.com/in/martins-obayomi-998202162/">
            LinkedIn
          </a>
          , and{" "}
          <a href="https://stackoverflow.com/users/9985506/martins">
            StackOverflow
          </a>{" "}
          profiles, using the contact form below, you could also reach out
          regarding project ideas, questions, or just to say hello!{" "}
        </p>

        <ContactForm />
      </div>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>
      <Seo title="About" />
    </title>
  </>
);

// Step 3: Export your component
export default AboutPage;
