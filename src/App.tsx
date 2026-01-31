export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text grid place-items-center p-6">
      <div className="w-full max-w-xl rounded-2xl bg-card shadow-soft border border-border p-8">
        <p className="text-sm text-muted">Vava Spa • Kigali</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Luxury spa look is now set
        </h1>
        <p className="mt-3 text-muted leading-relaxed">
          Clean neutrals, readable text, and deep green as an accent. This is
          the foundation for a “wow” spa website.
        </p>

        <div className="mt-6 flex gap-3">
          <button className="rounded-xl bg-brand px-5 py-3 text-white hover:opacity-95">
            Book on WhatsApp
          </button>
          <button className="rounded-xl border border-border px-5 py-3 text-text hover:bg-bg">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
}
