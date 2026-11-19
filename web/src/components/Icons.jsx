function Svg({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none">
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconMenu() {
  return (
    <Svg>
      <path d="M4 7h16M4 12h16M4 17h16" {...stroke} />
    </Svg>
  );
}

export function IconClose() {
  return (
    <Svg>
      <path d="M6 6l12 12M18 6 6 18" {...stroke} />
    </Svg>
  );
}

export function IconSun() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="3.2" {...stroke} />
      <path
        d="M12 3.5v1.8M12 18.7v1.8M3.5 12h1.8M18.7 12h1.8M6 6l1.3 1.3M16.7 16.7 18 18M18 6l-1.3 1.3M7.3 16.7 6 18"
        {...stroke}
      />
    </Svg>
  );
}

export function IconMoon() {
  return (
    <Svg>
      <path
        d="M15.5 14.5A6.2 6.2 0 0 1 9.6 5.2 6.4 6.4 0 1 0 15.5 14.5Z"
        {...stroke}
      />
    </Svg>
  );
}

export function IconArrow() {
  return (
    <Svg>
      <path d="M5 12h14M13 6l6 6-6 6" {...stroke} />
    </Svg>
  );
}

export function IconExternal() {
  return (
    <Svg>
      <path d="M14 6h4v4M18 6l-8 8" {...stroke} />
      <path d="M16 13.5V17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.5" {...stroke} />
    </Svg>
  );
}
