import React from "react";
// Styles imported globally in _app.tsx

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Meaningful Conversation in the Digital Age",
      excerpt:
        "In a world of quick texts and surface-level interactions, how do we create spaces for genuine dialogue? We explore the science behind meaningful conversations and why they matter more than ever.",
      author: "Sarah Chen",
      date: "January 15, 2024",
      readTime: "5 min read",
      category: "Connection",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Why Traditional Networking Events Are Failing Us",
      excerpt:
        "The awkward business card exchanges and forced elevator pitches aren't working anymore. We dive into what's broken and how we can build something better.",
      author: "Mike Rodriguez",
      date: "January 10, 2024",
      readTime: "4 min read",
      category: "Networking",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "The Psychology of Shared Interests",
      excerpt:
        "What happens in our brains when we discover someone shares our passion for hiking, coding, or cooking? The science behind why shared interests create stronger bonds.",
      author: "Emma Wilson",
      date: "January 5, 2024",
      readTime: "6 min read",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "Building Community in a Remote-First World",
      excerpt:
        "As more of us work from home, the need for authentic human connection has never been greater. How do we create meaningful relationships when we're physically apart?",
      author: "David Kim",
      date: "December 28, 2023",
      readTime: "7 min read",
      category: "Community",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "The Future of Social Connection",
      excerpt:
        "Technology has changed how we connect, but not always for the better. We explore what the future of human connection might look like and how we can shape it.",
      author: "Lisa Thompson",
      date: "December 20, 2023",
      readTime: "8 min read",
      category: "Future",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    },
    {
      id: 6,
      title: "From Small Talk to Deep Connection",
      excerpt:
        "Practical strategies for moving beyond surface-level conversations and creating meaningful dialogue that builds lasting relationships.",
      author: "Alex Johnson",
      date: "December 15, 2023",
      readTime: "5 min read",
      category: "Communication",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    },
  ];

  const categories = [
    "All",
    "Connection",
    "Networking",
    "Psychology",
    "Community",
    "Future",
    "Communication",
  ];

  return (
    <div className="blog">
      <div className="blog__container">
        <div className="blog__header">
          <h1 className="blog__title">Our Blog</h1>
          <p className="blog__subtitle">
            Thoughts on meaningful connections, human psychology, and building
            better relationships in the digital age.
          </p>
        </div>

        <div className="blog__featured">
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <div key={post.id} className="blog__featured-post">
                <div className="blog__featured-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog__featured-content">
                  <div className="blog__post-meta">
                    <span className="blog__post-category">{post.category}</span>
                    <span className="blog__post-date">{post.date}</span>
                    <span className="blog__post-read-time">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="blog__featured-title">{post.title}</h2>
                  <p className="blog__featured-excerpt">{post.excerpt}</p>
                  <div className="blog__post-author">
                    <span className="blog__author-name">By {post.author}</span>
                  </div>
                  <button className="blog__read-more">Read Full Article</button>
                </div>
              </div>
            ))}
        </div>

        <div className="blog__filters">
          <div className="blog__categories">
            {categories.map((category) => (
              <button key={category} className="blog__category-button">
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="blog__posts">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <article key={post.id} className="blog__post">
                <div className="blog__post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog__post-content">
                  <div className="blog__post-meta">
                    <span className="blog__post-category">{post.category}</span>
                    <span className="blog__post-date">{post.date}</span>
                    <span className="blog__post-read-time">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="blog__post-title">{post.title}</h3>
                  <p className="blog__post-excerpt">{post.excerpt}</p>
                  <div className="blog__post-author">
                    <span className="blog__author-name">By {post.author}</span>
                  </div>
                  <button className="blog__read-more">Read More</button>
                </div>
              </article>
            ))}
        </div>

        <div className="blog__newsletter">
          <div className="blog__newsletter-content">
            <h2 className="blog__newsletter-title">Stay Connected</h2>
            <p className="blog__newsletter-text">
              Get our latest thoughts on meaningful connections delivered to
              your inbox.
            </p>
            <form className="blog__newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="blog__newsletter-input"
                required
              />
              <button type="submit" className="blog__newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
