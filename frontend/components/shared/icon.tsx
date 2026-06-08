type IconName =
  | "home"
  | "person"
  | "school"
  | "history_edu"
  | "dashboard"
  | "mail"
  | "location_on"
  | "business"
  | "arrow_forward"
  | "keyboard_double_arrow_down"
  | "description"
  | "grid_view"
  | "sensors"
  | "add"
  | "code"
  | "open_in_new"
  | "github"
  | "linkedin";

type IconProps = {
  name: IconName;
  className?: string;
};

function baseSvg(className?: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
}

export function Icon({ name, className }: IconProps) {
  switch (name) {
    case "home":
      return (
        <svg {...baseSvg(className)}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10.5V20h14v-9.5" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "person":
      return (
        <svg {...baseSvg(className)}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
    case "school":
      return (
        <svg {...baseSvg(className)}>
          <path d="M3 9 12 4l9 5-9 5-9-5Z" />
          <path d="M7 11.5V16c0 1.7 2.2 3 5 3s5-1.3 5-3v-4.5" />
          <path d="M21 10v5" />
        </svg>
      );
    case "history_edu":
      return (
        <svg {...baseSvg(className)}>
          <path d="M6 4h9l3 3v13H6z" />
          <path d="M15 4v4h4" />
          <path d="M9 12c1-2 5-2 6 0s-1 4-3 5" />
          <path d="M9 17h6" />
        </svg>
      );
    case "dashboard":
    case "grid_view":
      return (
        <svg {...baseSvg(className)}>
          <rect x="4" y="4" width="7" height="7" />
          <rect x="13" y="4" width="7" height="7" />
          <rect x="4" y="13" width="7" height="7" />
          <rect x="13" y="13" width="7" height="7" />
        </svg>
      );
    case "mail":
      return (
        <svg {...baseSvg(className)}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "location_on":
      return (
        <svg {...baseSvg(className)}>
          <path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "business":
      return (
        <svg {...baseSvg(className)}>
          <rect x="4" y="4" width="10" height="16" />
          <path d="M14 8h6v12h-6" />
          <path d="M7 8h2M7 12h2M7 16h2" />
        </svg>
      );
    case "arrow_forward":
      return (
        <svg {...baseSvg(className)}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "keyboard_double_arrow_down":
      return (
        <svg {...baseSvg(className)}>
          <path d="m7 8 5 5 5-5" />
          <path d="m7 13 5 5 5-5" />
        </svg>
      );
    case "description":
      return (
        <svg {...baseSvg(className)}>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5" />
          <path d="M10 13h6M10 17h6" />
        </svg>
      );
    case "sensors":
      return (
        <svg {...baseSvg(className)}>
          <circle cx="12" cy="12" r="2" />
          <path d="M5 12a7 7 0 0 1 14 0" />
          <path d="M2 12a10 10 0 0 1 20 0" />
        </svg>
      );
    case "add":
      return (
        <svg {...baseSvg(className)}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "code":
      return (
        <svg {...baseSvg(className)}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        </svg>
      );
    case "open_in_new":
      return (
        <svg {...baseSvg(className)}>
          <path d="M14 5h5v5" />
          <path d="M10 14 19 5" />
          <path d="M19 13v6H5V5h6" />
        </svg>
      );
    case "github":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5ZM8 19H5V8h3v11ZM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 6.5 3.204s1.75.79 1.75 1.764-.783 1.764-1.75 1.764ZM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19Z" />
        </svg>
      );
    default:
      return null;
  }
}
