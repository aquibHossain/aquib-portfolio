import { useEffect, useState } from "react";
import { nav } from "../data/content.js";
import { useTheme } from "../hooks/useTheme.js";
import { IconClose, IconMenu, IconMoon, IconSun } from "./Icons.jsx";

export default function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const lightLabel = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!nodes.length || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.25, 0.6] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-bar">
        <a className="brand" href="#top" aria-label="Aquib Hossain, back to top">
          <span className="brand-mark" aria-hidden="true">
            AH
          </span>
          <span className="brand-name">Aquib Hossain</span>
        </a>

        <nav
          id="site-nav"
          className={open ? "primary-nav is-open" : "primary-nav"}
          aria-label="Primary"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={active === item.id ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-tools">
          <a className="btn btn-primary header-cta" href="#contact" onClick={() => setOpen(false)}>
            Hire me
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={lightLabel}
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
            <span className="theme-label">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
