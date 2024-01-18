import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function indexPage({ data }) {
  const { welcome: message } = data.contentfulFrontPage;
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-4xl font-bold">{message}</p>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulFrontPage {
      welcome
    }
  }
`;

export const Head = () => <title>Home Page</title>;
