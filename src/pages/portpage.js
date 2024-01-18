import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function portpage({ data }) {
  const posts = data.allContentfulPortfolioPost.nodes;

  return (
    <Layout>
      <main>
       {posts.map((post, index) => {
         return <div key={index}><Link to={"/post/" + post.fullPostRef.id} >{post.titel}</Link></div>
       })} 
       </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulPortfolioPost {
      nodes {
        fullPostRef {
          id
        }
        portfolioLink
        shortDescription
        thumbnail {
          url
        }
        titel
        days
        tags
      }
    }
  }
`;
