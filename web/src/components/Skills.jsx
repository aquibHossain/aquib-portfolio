import { skills, skillsNote } from "../data/content.js";
import Placeholder from "./Placeholder.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <p className="kicker">02 — Skills</p>
          <h2>Building and renovating websites.</h2>
          <ol className="skill-list">
            {skills.map((skill, index) => (
              <li key={skill.name}>
                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          {skillsNote.placeholder ? <Placeholder>{skillsNote.text}</Placeholder> : null}
        </Reveal>
      </div>
    </section>
  );
}
