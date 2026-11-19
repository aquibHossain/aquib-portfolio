import { experience } from "../data/content.js";
import Placeholder from "./Placeholder.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="kicker">04 — Experience</p>
          <h2>Experience</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.title} className="job">
                <p className="job-period">{job.period}</p>
                <div>
                  <h3>{job.title}</h3>
                  <p className="job-level">{job.level}</p>
                  {job.summary.placeholder ? (
                    <Placeholder>{job.summary.text}</Placeholder>
                  ) : (
                    <p>{job.summary.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
