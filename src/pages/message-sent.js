import { Link } from "gatsby";
import React from "react";

const messageSsent = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <p>
        Your message has been sent!, you'll hear back from me soon. Thanks for
        reaching out.
      </p>
      <div style={{ paddingTop: "20px" }}>
        <Link to="/about">
          <h1> Go back </h1>
        </Link>
      </div>
    </div>
  );
};

export default messageSsent;
