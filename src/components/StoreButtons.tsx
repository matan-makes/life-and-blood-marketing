import { LINKS } from "../config.ts";

// Official store badges. Both SVGs fill their full viewBox (no inner padding),
// so an equal height gives equal visible button height.
export default function StoreButtons() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <a
        href={LINKS.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blood"
      >
        <img
          src="./badge-appstore.svg"
          alt="Download on the App Store"
          className="h-[50px] w-auto"
        />
      </a>
      <a
        href={LINKS.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blood"
      >
        <img
          src="./badge-googleplay.svg"
          alt="Get it on Google Play"
          className="h-[50px] w-auto"
        />
      </a>
    </div>
  );
}
