import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function About({ data }) {
  const { presentation, profilBild, utbildning, erfarenhet } =
    data.contentfulAboutPage;

  return (
    <Layout>
      <main className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
          <div className="lg:w-1/3 mx-auto lg:mx-0 mb-4 lg:mb-0">
            <div className="image-container">
              <img
                src={profilBild.url}
                alt="Profile Picture"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="lg:w-2/3 lg:pl-8">
            <div className="information mb-4 bg-blue-100 p-4 rounded-md">
              <h2 className="text-2xl font-bold mb-2">Education</h2>
              <ul className="list-disc pl-4">
                {utbildning.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="information mb-4 bg-green-100 p-4 rounded-md">
              <h2 className="text-2xl font-bold mb-2">Experience</h2>
              <ul className="list-disc pl-4">
                {erfarenhet.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-100 p-4 rounded-md">
          <p className="text-lg">{presentation.presentation}</p>
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulAboutPage {
      presentation {
        presentation
      }
      profilBild {
        url
      }
      utbildning
      erfarenhet
    }
  }
`;
