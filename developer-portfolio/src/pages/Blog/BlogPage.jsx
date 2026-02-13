import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import "./BlogPage.css";
import { SingleBlog } from "../../components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { blogData } from "../../data/blogData";
import { headerData } from "../../data/headerData";

function BlogPage() {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const filteredArticles = blogData.filter((blog) => {
    const content = blog.title + blog.description + blog.date;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Blog</title>
      </Helmet>

      {/* ---------- HEADER ---------- */}
      <div
        className="blogPage--header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome
            className="blogPage-home"
            style={{ color: theme.secondary }}
          />
        </Link>
        <h1 style={{ color: theme.secondary }}>Blogs</h1>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="blogPage--container">
        <div className="blog--search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search blog..."
            className="blog-search-input"
            style={{
              color: theme.tertiary,
              backgroundColor: theme.secondary,
            }}
          />
        </div>

        <div className="blogs--container">
          <div className="blog-grid">
            {filteredArticles
              .slice()
              .reverse()
              .map((blog) => (
                <SingleBlog
                  key={blog.id}
                  id={blog.id}
                  theme={theme}
                  title={blog.title}
                  desc={blog.description}
                  date={blog.date}
                  image={blog.image}
                  url={blog.url}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
