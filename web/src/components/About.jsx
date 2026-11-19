import portrait from "../assets/images/aquib-bg2.png";
import { aboutBio, aboutLines, profile } from "../data/content.js";
import Placeholder from "./Placeholder.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="about-grid">
            <figure className="about-figure">
              <img
                src={portrait}
                width="714"
                height="686"
                alt="Aquib Hossain"
                decoding="async"
              />
            </figure>
            <div className="about-copy">
              <p className="kicker">01 — About</p>
              <h2>
                {profile.dream}
                <span> {profile.dreamDetail}</span>
              </h2>
              {aboutLines.map((line) => (
                <p key={line} className="body-copy">
                  {line}
                </p>
              ))}
              {aboutBio.placeholder ? <Placeholder>{aboutBio.text}</Placeholder> : <p>{aboutBio.text}</p>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
