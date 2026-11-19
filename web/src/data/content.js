/**
 * Site content
 * ------------
 * Visitor-facing copy lives here. It comes from the original portfolio.
 * Entries with placeholder: true were filler text or were missing. Replace
 * the text and set placeholder to false.
 *
 * Contact form
 * ------------
 * The original site did not list an email address. Use one option below.
 *
 * 1. mailto — no server and no account
 *    Set contactEmail to your address, for example "you@example.com".
 *    Submit opens the visitor's email app with the message filled in.
 *
 * 2. Free form service
 *    Set formEndpoint to a form URL, for example
 *    "https://formspree.io/f/xxxxxxxx".
 *    Create a form at https://formspree.io (or any service that accepts
 *    JSON POST) and paste its endpoint here. The form sends
 *    { name, email, message }.
 *
 * If both stay empty, the form copies the message and the page points
 * visitors to LinkedIn and GitHub — the contact links from the original site.
 * formEndpoint is used first when both are set.
 */
export const contactEmail = "";
export const formEndpoint = "";

export const profile = {
  name: "Aquib Hossain",
  role: "Developer",
  tagline: "Build websites and renovate them.",
  welcome: "Welcome to Aquib Hossain’s world.",
  dream: "Dream big.",
  dreamDetail: "Become a developer.",
  linkedin: "https://www.linkedin.com/in/aquib-hossain-386b08164/",
  github: "https://github.com/aquibHossain/aquib-portfolio",
  liveSite: "https://aquibhossain.github.io/aquib-portfolio/",
  footer: "© and preserved by aquib hossain and co",
};

export const aboutLines = [
  "Welcome to Aquib Hossain’s world.",
  "Build websites and renovate them.",
];

export const aboutBio = {
  placeholder: true,
  text: "A personal bio was not included on the previous site — that paragraph was filler text. Replace this with your own story in web/src/data/content.js, then set placeholder to false.",
};

export const skills = [
  { name: "Website building", detail: "Build websites." },
  { name: "Website renovation", detail: "Renovate existing websites." },
  { name: "HTML", detail: "Used to build the original version of this portfolio." },
  { name: "CSS", detail: "Used to style the original version of this portfolio." },
];

export const skillsNote = {
  placeholder: true,
  text: "No other skills were listed. Add them in web/src/data/content.js.",
};

export const projects = [
  {
    placeholder: false,
    title: "Personal portfolio",
    summary:
      "Personal website introducing Aquib Hossain and his work building and renovating websites.",
    links: [
      { label: "Live site", href: profile.liveSite },
      { label: "GitHub", href: profile.github },
    ],
  },
  {
    placeholder: true,
    title: "Project title",
    summary:
      "No other projects were listed. Add a name, a short summary, and a link in web/src/data/content.js.",
    links: [],
  },
];

export const experience = [
  {
    title: "Part Time developer",
    period: "2020–2021",
    level: "Beginner level developer",
    summary: {
      placeholder: true,
      text: "A description was not included — the original paragraph was filler text. Add what this role involved in web/src/data/content.js.",
    },
  },
  {
    title: "Full Time developer",
    period: "2020–2021",
    level: "Pro level developer",
    summary: {
      placeholder: true,
      text: "A description was not included — the original paragraph was filler text. Add what this role involved in web/src/data/content.js.",
    },
  },
];

export const nav = [
  { href: "#about", id: "about", label: "About" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#contact", id: "contact", label: "Contact" },
];
