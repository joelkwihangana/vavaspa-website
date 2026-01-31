import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Container className="py-16">
          <h1 className="text-4xl font-semibold tracking-tight">
            Next: Hero carousel
          </h1>
          <p className="mt-3 text-muted max-w-2xl">
            Navbar is now premium, calm, and focused on WhatsApp booking.
          </p>
        </Container>
      </main>
    </div>
  );
}
