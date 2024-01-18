import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function Kontakt({ data }) {
  const { namn, profilBild, email, githubLink } = data.contentfulKontaktPage;

  return (
    <Layout>
      <main className="container mx-auto p-8 md:p-16 lg:p-24">
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-md">
          <div className="md:w-1/2 md:pr-8">
            <div className="image-container mb-4 md:mb-0">
              <img
                src={profilBild.url}
                alt={`Profile of ${namn}`}
                className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              {namn}
            </h1>
            <div className="detailed-information">
              <p className="text-base md:text-lg">Email: {email}</p>
              <p className="text-base md:text-lg">Github: {githubLink}</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulKontaktPage {
      namn
      profilBild {
        url
      }
      email
      githubLink
    }
  }
`;
