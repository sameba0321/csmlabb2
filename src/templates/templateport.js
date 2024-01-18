import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function TemplatePort({ data }) {
  const { content, image, kategori, portfolioLink, titel } =
    data.contentfulFullPost;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{titel}</h1>

        <div className="image-container w-full md:w-2/3 mx-auto mb-4">
          <img
            className="w-1/8 h-auto rounded-md "
            src={image.url}
            alt={titel}
          />
        </div>

        <div className="mt-2 p-4 bg-gray-100 rounded-md">
          <p className="text-gray-600">Category: {kategori}</p>
          <p className="text-blue-500">Link: {portfolioLink}</p>
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-md text-sm text-gray-800">
          {content.content}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($postId: String!) {
    contentfulFullPost(id: { eq: $postId }) {
      content {
        content
      }
      datum
      image {
        url
      }
      kategori
      portfolioLink
      titel
    }
  }
`;
