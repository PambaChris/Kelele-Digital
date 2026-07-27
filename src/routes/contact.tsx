import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { KeleleHeader } from "@/components/kelele/KeleleHeader";
import { KeleleFooter } from "@/components/kelele/KeleleFooter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kelele Digital" },
      {
        name: "description",
        content: "Get in touch with Kelele Digital in Nairobi — for editorial pitches, partnerships, or brand work.",
      },
      { property: "og:title", content: "Contact — Kelele Digital" },
      {
        property: "og:description",
        content: "Reach the Kelele Digital newsroom and studio in Nairobi.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const ref = useReveal<HTMLDivElement>();
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <KeleleHeader />

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div ref={ref} className="reveal grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              Contact
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-6xl">
              Say <span className="text-primary">kelele</span>.<br />We'll say it back.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Editorial pitches, partnerships, brand work — anything at all.
              Our inbox is open.
            </p>

            <ul className="mt-12 space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 flex-none place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Studio
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">
                    0000, Nairobi, Kenya
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 flex-none place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Phone
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">
                    +254 000 000 000
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 flex-none place-items-center bg-[var(--kelele-ink)] text-[var(--kelele-accent)]">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Email
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold">
                    hello@0000
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setError(null);
                if (!state.name || !state.email || !state.message) {
                  setError("Please fill out every field.");
                  return;
                }
                if (!/^\S+@\S+\.\S+$/.test(state.email)) {
                  setError("That email doesn't look right.");
                  return;
                }
                setSent(true);
              }}
              className="border border-border bg-[var(--surface)] p-8 md:p-12"
            >
              <div className="mb-8">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Send us a note
                </div>
                <h2 className="mt-2 font-display text-3xl font-bold">Start a conversation.</h2>
              </div>

              {sent ? (
                <div className="border-l-4 border-primary bg-background p-6">
                  <div className="font-display text-2xl font-bold">Thanks — we've got it.</div>
                  <p className="mt-2 text-muted-foreground">
                    We reply to every message. Give us up to 48 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field label="Your name">
                    <input
                      type="text"
                      value={state.name}
                      onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                      className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none focus:border-primary"
                      placeholder="Wanjiku Mwangi"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      value={state.email}
                      onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                      className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none focus:border-primary"
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Message">
                    <textarea
                      rows={5}
                      value={state.message}
                      onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full border-b-2 border-border bg-transparent py-3 text-lg outline-none focus:border-primary"
                      placeholder="Tell us what you're building…"
                    />
                  </Field>

                  {error && <div className="text-sm font-semibold text-primary">{error}</div>}

                  <button
                    type="submit"
                    className="mt-4 inline-flex items-center gap-2 bg-[var(--kelele-ink)] px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-primary"
                  >
                    Send message →
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <KeleleFooter />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
