import styled from "styled-components";
import {Heading1, Heading2, Spacer} from "../home";
import {Heading3} from "../contact";
import Button from "../../components/button";
import {useEffect, useState} from "react";

type Blog = {
  title: string;
  excerpt: string;
}

const BlogSection = styled.section`
  border: 1px solid rgb(var(--gray));
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 45ch;
`;

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = (await import("../../data.json")).default;
      setBlogs(blogs);
    }
    getBlogs();
  }, []);

  return (
    <div>
      <Spacer $size="6rem" />
      <Heading1><span style={{color: "rgb(var(--primary))"}}>/</span>Blogs</Heading1>
      <Spacer $size="0.5rem" />
      <p>List of my blogs; enjoy</p>
      <Spacer $size="6rem" />

      <section>
        <Heading2><span style={{color: "rgb(var(--primary))"}}>#</span>All Blogs</Heading2>
        <Spacer $size="3rem" />
        <div style={{display: "flex", flexWrap: "wrap", gap: "1rem"}}>
          {
            blogs.map((blog) =>
              <BlogSection key={blog.title}>
                <Heading3> {blog.title} </Heading3>
                <p style={{lineHeight: "200%"}}>{blog.excerpt}</p>
                <div style={{display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", gridTemplateRows: "masonry", marginTop: "auto"}}>
                  <Button className="button button--primary">Contact me!!</Button>
                  <Button className="button button--gray">Download CV</Button>
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
