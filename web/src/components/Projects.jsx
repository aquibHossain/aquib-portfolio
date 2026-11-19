import { projects } from "../data/content.js";
import ExternalLink from "./ExternalLink.jsx";
import { IconExternal } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <p className="kicker">03 — Projects</p>
          <h2>Work you can open.</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className={project.placeholder ? "project-card is-placeholder" : "project-card"}
              >
                {project.placeholder ? <p className="placeholder-label">Placeholder</p> : null}
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                {project.links.length > 0 ? (
                  <ul className="project-links">
                    {project.links.map((link) => (
                      <li key={link.href}>
                        <ExternalLink href={link.href} className="text-link">
                          {link.label}
                          <IconExternal />
                        </ExternalLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
