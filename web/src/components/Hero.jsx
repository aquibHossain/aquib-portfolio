import portrait from "../assets/images/aquib-bg.png";
import { profile } from "../data/content.js";
import ExternalLink from "./ExternalLink.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="kicker">
            <span className="kicker-dot" aria-hidden="true" />
            {profile.role}
          </p>
          <h1>
            Aquib
            <br />
            <em>Hossain</em>
          </h1>
          <p className="lede">{profile.tagline}</p>
          <p className="dream-line">
            {profile.dream} {profile.dreamDetail}
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Hire me
            </a>
            <a className="btn btn-ghost" href="#contact">
              Let’s talk
            </a>
          </div>
          <ul className="hero-links">
            <li>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            </li>
            <li>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
            </li>
          </ul>
        </div>
        <div className="hero-visual">
          <img
            src={portrait}
            width="835"
            height="829"
            alt="Portrait of Aquib Hossain"
          />
        </div>
      </div>
    </section>
  );
}
