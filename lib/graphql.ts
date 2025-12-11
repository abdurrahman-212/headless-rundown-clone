// lib/graphql.ts
import { GraphQLClient, gql } from 'graphql-request';

// Apnar GraphQL Endpoint Link
const API_URL = 'https://compare.cloudelevates.com/graphql';

// Client toiri kora holo
const client = new GraphQLClient(API_URL);

// TypeScript Article Interface - WordPress GraphQL field-er shonge match korbe
export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  uri: string;
  content?: string; 
  
  // 🚀 Featured Image (WPGraphQL field)
  featuredImage?: { 
    node: {
      sourceUrl: string; 
    };
  };
  
  // 🚀 Author Details (WPGraphQL field)
  author?: { 
    node: {
      name: string;
    };
  };
}

// 4. GraphQL Query: Shob Post anar jonno (Article Card-er dorkar)
export const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        slug
        excerpt
        date
        uri
        # 🚀 Image data anar jonno
        featuredImage {
          node {
            sourceUrl
          }
        }
        # 🚀 Author data anar jonno
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

// 5. GraphQL Query: Slug diye single Post anar jonno (Single Article Page-er dorkar)
export const SINGLE_POST_QUERY = gql`
  query SinglePostQuery($slug: String!) {
    postBy(slug: $slug) {
      title
      slug
      content # Ekhane full post content ashbe
      date
      uri
      # 🚀 Image data anar jonno
      featuredImage {
          node {
            sourceUrl
          }
        }
      # 🚀 Author data anar jonno
      author {
        node {
          name
        }
      }
    }
  }
`;

/**
 * All Posts fetch korar jonno function
 */
export async function getPosts(): Promise<Article[]> {
  const data: any = await client.request(ALL_POSTS_QUERY);
  // Typecasting: data.posts.nodes hishebe Article array return kora holo
  return data.posts.nodes as Article[];
}

/**
 * Single Post fetch korar jonno function
 */
export async function getSinglePost(slug: string): Promise<Article | undefined> {
  const data: any = await client.request(SINGLE_POST_QUERY, { slug });
  // Typecasting: data.postBy hishebe single Article return kora holo
  return data.postBy as Article;
}