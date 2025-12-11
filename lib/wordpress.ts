// lib/wordpress.ts

// WordPress Posts interface
export interface Post {
    id: number;
    title: { rendered: string };
    featured_media: number; // WordPress Featured Image ID
    excerpt: { rendered: string };
    slug: string; // Used for the URL, instead of simple ID
    // Pore apnake WordPress API theke shob dorkari field ekhane add korte hobe
}

// Dummy data for initial display (Eita pore WordPress API call diye change korte hobe)
const dummyPosts: Post[] = [
    // ... (Aage diye dewa dummy data ekhane Post type hishebe thakbe)
    // E-gulo ArticleGrid ebong Single Article page-e bebohar hobe
];


/**
 * All Posts fetch korar jonno placeholder function.
 * Pore ekhane ashol WordPress API call add korte hobe:
 * e.g., const response = await fetch('YOUR_WP_URL/wp-json/wp/v2/posts');
 */
export async function getPostsFromWordPress(): Promise<Post[]> {
    // Ekhon shudhu dummy data return korche
    return dummyPosts;
}

/**
 * Single Post fetch korar jonno placeholder function (by slug/ID).
 */
export async function getSinglePostFromWordPress(slug: string): Promise<Post | undefined> {
    // Ekhon shudhu dummy data theke match korche
    return dummyPosts.find(post => post.slug === slug); 
}

// NOTE: Baki WordPress API integration (image URL, content etc.) apnake pore korte hobe.