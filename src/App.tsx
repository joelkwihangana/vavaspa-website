import Button from "./components/ui/Button";
import { site, waLink } from "./data/site";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text grid place-items-center p-6">
      <div className="w-full max-w-xl rounded-2xl bg-card shadow-soft border border-border p-8">
        <p className="text-sm text-muted">
          {site.name} • {site.city}
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Luxury spa look is now set
        </h1>

        <p className="mt-3 text-muted leading-relaxed">
          Clean neutrals, readable text, and deep green as an accent. This is
          the foundation for a “wow” spa website.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={waLink(site.whatsappPrimary, site.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
          >
            <Button>Book on WhatsApp</Button>
          </a>

          <Button variant="secondary">View Services</Button>
        </div>
      </div>
    </div>
  );
}
