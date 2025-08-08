import styled from "styled-components";
import { Heading1, Heading2, Spacer } from "../home";
import { Heading3, LinkTag } from "../contact";
import { useEffect, useState } from "react";
import { TagSection } from "../../components/project";

type Blog = {
  title: string;
  excerpt: string;
  url: string;
  published: string;
  tags: string[]
}

const BlogSection = styled.section`
  border: 1px solid rgb(var(--gray));
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const { blogs } = (await import("../../data.json")).default;
      setBlogs(blogs);
    }
    getBlogs();
  }, []);

  return (
    <div>
      <Spacer $size="6rem" />
      <Heading1><span style={{ color: "rgb(var(--primary))" }}>/</span>Blogs</Heading1>
      <Spacer $size="0.5rem" />
      <p>List of my blogs; enjoy</p>
      <Spacer $size="6rem" />

      <section>
        <Heading2><span style={{ color: "rgb(var(--primary))" }}>#</span>All Blogs</Heading2>
        <Spacer $size="3rem" />
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {
            blogs.sort((a, b) => new Date(b.published) > new Date(a.published) ? 1 : -1).map((blog) =>
              <BlogSection key={blog.title}>
                <Heading3> {blog.title} </Heading3>
                <TagSection style={{ borderBottom: "1px solid" }}>{blog.tags.join(", ")}</TagSection>
                <span style={{ fontStyle: "italic", color: "rgb(var(--white))" }}>{blog.published}</span>
                <p style={{ lineHeight: "200%" }}>{blog.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", gridTemplateRows: "masonry", marginTop: "auto" }}>
                  <LinkTag target="_blank" className="button button--primary" href={blog.url}>Read More</LinkTag>
                </div>
              </BlogSection>
            )
          }
        </div>
      </section>
    </div>
  )
}


export default Blogs;
