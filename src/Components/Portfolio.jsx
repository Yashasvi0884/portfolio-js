/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/dt.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ResuShape",
    description:
      "A platform for creating resumes using different templates. Users can generate resumes by selecting a template and filling in necessary details.",
    tools: ["Next.js", "TypeScript", "Django", "Amazon S3", "LaTeX"],
    url: "https://github.com/Ad-30/resumemaker"
  },
  {
    title: "PromptOasis",
    description:
      "An AI-powered hub for sharing and creating prompts. The platform provides required prompts for respective AI tools.",
    tools: ["Next.js", "TypeScript", "NextAuth"],
    url: "https://github.com/AdityaSinghRajawat/PromptOasis-nextjs"
  },
  {
    title: "Brainiac",
    description:
      "AI-powered SaaS platform offering diverse AI tools for text, image, code, music, and video generation.",
    tools: ["Next.js", "Clerk", "AI Tools"],
    url: "https://github.com/AdityaSinghRajawat/Brainiac-AI"
  },
  {
    title: "Glimpse",
    description:
      "A social media platform for sharing captured moments of life, implementing various social media functionalities.",
    tools: ["Node.js", "MongoDB", "Express.js", "React.js"],
    url: "https://github.com/AdityaSinghRajawat/GlimpseServer"
  }
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
