import { Link } from "react-router-dom";
import { LINKS, APP } from "../config.ts";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/75">
      <nav className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <Link to="/privacy" className="hover:text-white">
          Privacy
        </Link>
        <a
          href={LINKS.koFi}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Support on Ko-fi
        </a>
      </nav>
      <p className="mb-4">
        Support the game:{" "}
        <a
          href={LINKS.fabOfficial}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline underline-offset-2 hover:text-white/80"
        >
          fabtcg.com
        </a>{" "}
        ·{" "}
        <a
          href={LINKS.fabrary}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline underline-offset-2 hover:text-white/80"
        >
          fabrary.net
        </a>
      </p>
      <p>
        © {year} {APP.name}. An unofficial fan-made tool, not affiliated with or
        endorsed by Legend Story Studios.
      </p>
    </footer>
  );
}
