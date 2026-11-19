import { nav, profile } from "../data/content.js";
import ExternalLink from "./ExternalLink.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p>{profile.footer}</p>
        <ul className="footer-links">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href="#top">Back to top</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
