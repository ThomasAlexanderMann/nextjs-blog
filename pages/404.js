import React from "react";
import Link from "next/Link";

const notFoundPage = () => {
  return (
    <>
      <div>That page does not exist!!!!</div>
      <Link href="/">Back to home</Link>
    </>
  );
};

export default notFoundPage;
