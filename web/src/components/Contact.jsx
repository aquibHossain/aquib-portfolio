import { useState } from "react";
import { contactEmail, formEndpoint, profile } from "../data/content.js";
import ExternalLink from "./ExternalLink.jsx";
import { IconArrow } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function configuredEmail() {
  const email = contactEmail.trim();
  return EMAIL_PATTERN.test(email) ? email : "";
}

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [pending, setPending] = useState(false);
  const email = configuredEmail();
  const endpoint = formEndpoint.trim();
  const inboxReady = Boolean(endpoint || email);

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company") || "").trim()) {
      setStatus({ type: "success", text: "Thanks. Your note is recorded." });
      return;
    }

    const name = clean(String(data.get("name") || ""));
    const from = clean(String(data.get("email") || ""));
    const message = String(data.get("message") || "").trim();

    if (!name || !from || !message || !EMAIL_PATTERN.test(from)) {
      setStatus({ type: "error", text: "Add your name, a valid email, and a message." });
      return;
    }

    const composed = `Name: ${name}\nEmail: ${from}\n\n${message}`;

    if (endpoint) {
      setPending(true);
      setStatus({ type: "pending", text: "Sending…" });
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email: from, message }),
        });
        if (!response.ok) throw new Error(`Request failed (${response.status})`);
        form.reset();
        setStatus({ type: "success", text: "Message sent." });
      } catch {
        setStatus({
          type: "error",
          text: "The form could not be sent. Please use LinkedIn instead.",
        });
      } finally {
        setPending(false);
      }
      return;
    }

    if (email) {
      const href = `mailto:${email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${name}`
      )}&body=${encodeURIComponent(composed)}`;
      const link = document.createElement("a");
      link.href = href;
      link.rel = "nofollow";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setStatus({
        type: "success",
        text: "Your email app should open with this message. If it doesn’t, use the address shown above.",
      });
      return;
    }

    let copied = false;
    try {
      await navigator.clipboard.writeText(composed);
      copied = true;
    } catch {
      copied = false;
    }

    setStatus({
      type: "setup",
      text: copied
        ? "No inbox is connected yet, so this message was copied. Send it on LinkedIn, or set contactEmail or formEndpoint in web/src/data/content.js."
        : "No inbox is connected yet. Copy the message below and send it on LinkedIn, or set contactEmail in web/src/data/content.js.",
      copy: copied ? "" : composed,
    });
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-grid">
            <div>
              <p className="kicker">05 — Contact</p>
              <h2>Let’s talk.</h2>
              <p className="lede contact-lede">
                Hiring, a website build, or a renovation — start here.
              </p>
              <ul className="contact-channels">
                <li>
                  <ExternalLink href={profile.linkedin} className="channel">
                    <span>
                      <span className="channel-label">LinkedIn</span>
                      <span className="channel-meta">linkedin.com/in/aquib-hossain-386b08164</span>
                    </span>
                    <IconArrow />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href={profile.github} className="channel">
                    <span>
                      <span className="channel-label">GitHub</span>
                      <span className="channel-meta">aquibHossain/aquib-portfolio</span>
                    </span>
                    <IconArrow />
                  </ExternalLink>
                </li>
                {email ? (
                  <li>
                    <a className="channel" href={`mailto:${email}`}>
                      <span>
                        <span className="channel-label">Email</span>
                        <span className="channel-meta">{email}</span>
                      </span>
                      <IconArrow />
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>

            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <h3>Send a note</h3>
              {!inboxReady ? (
                <p className="form-hint">
                  No email address is listed yet, so this form copies your message.
                  Send it with the LinkedIn link, or connect an inbox in{" "}
                  <code>web/src/data/content.js</code>.
                </p>
              ) : null}
              <label className="hp" aria-hidden="true">
                Company
                <input name="company" tabIndex={-1} autoComplete="off" />
              </label>
              <label className="field">
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="field">
                <span>Message</span>
                <textarea name="message" rows="5" required />
              </label>
              <button className="btn btn-primary" type="submit" disabled={pending}>
                {pending ? "Sending…" : email || endpoint ? "Send message" : "Copy message"}
              </button>
              <div
                className={`form-status${status ? ` is-${status.type}` : ""}`}
                role="status"
                aria-live="polite"
              >
                {status?.text}
                {status?.copy ? <textarea readOnly value={status.copy} /> : null}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
