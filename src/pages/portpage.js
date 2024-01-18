import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function Portpage({ data }) {
  const posts = data.allContentfulPortfolioPost.nodes;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const allCate = posts.map((item) => item.category);
    setAllCategories([...allCate, "All"]);
  }, [posts]);

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <Layout>
      <main className="container mx-auto my-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold">Portfolio</h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {allCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 border rounded ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div key={index} className="mb-8">
              <p className="text-xl font-bold mb-2">{post.titel}</p>

              <div className="mb-4">
                <img
                  className="w-full h-48 object-cover"
                  src={post.thumbnail.url}
                  alt={post.titel}
                />
              </div>

              <p className="text-gray-700 mb-4">{post.shortDescription}</p>

              <Link
                to={"/post/" + post.fullPostRef.id}
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
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
        category
      }
    }
  }
`;
