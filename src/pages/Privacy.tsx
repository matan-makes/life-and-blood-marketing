import { Link } from "react-router-dom";
import { APP } from "../config.ts";
import Footer from "../components/Footer.tsx";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-ink text-bone">
      <main className="mx-auto max-w-2xl px-6 pt-16 pb-12">
        <Link to="/" className="eyebrow text-blood hover:underline">
          ← Back to {APP.name}
        </Link>

        <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-bone/65">Last updated: June 2026</p>

        <div className="mt-8 space-y-6 leading-relaxed text-bone/90">
          <p className="rounded-2xl border border-teal/30 bg-teal/10 p-5 text-bone">
            <strong>The short version:</strong> {APP.name} does not collect,
            store, or share any personal data. There's nothing to worry about.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-amber">
              What we collect
            </h2>
            <p className="mt-2">
              Nothing. {APP.name} has no accounts, no sign-up, and no analytics.
              We do not track you, and we have no servers that receive your
              information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-amber">
              Where your data lives
            </h2>
            <p className="mt-2">
              Anything the app remembers — your settings, chosen heroes, and
              match history — is stored only on your own device. It never leaves
              your phone, and deleting the app removes it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-amber">
              Third parties
            </h2>
            <p className="mt-2">
              {APP.name} does not include ads or third-party analytics SDKs.
              Links to outside sites (such as hero databases or the Ko-fi
              donation page) open in your browser and are governed by their own
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-amber">Children</h2>
            <p className="mt-2">
              Because the app collects no data from anyone, it collects no data
              from children either.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-amber">
              Changes to this policy
            </h2>
            <p className="mt-2">
              If this ever changes, the updated policy will be posted on this
              page. Since the app is built around collecting nothing, we don't
              expect that to happen.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
