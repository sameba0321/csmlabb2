import React from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby"

export default function templateport({data}) {
  const postData = data.contentfulFullPost
  console.log(postData)
  return (
    <Layout>
    <div>{postData.titel}</div>
    <div>{postData.content.content}</div>
    </Layout>
  )
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
