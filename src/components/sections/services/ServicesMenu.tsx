import { useState } from "react";
import { createPortal } from "react-dom";
import Container from "../../layout/Container";
import menuImg from "../../../assets/feature/menu.webp";

export default function ServicesMenu() {
  const [zoomed, setZoomed] = useState(false);

  return (
    <section className="section-tight border-t border-border">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Full Overview</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Our Services Menu</h2>
          <p className="mt-4 text-base text-muted leading-relaxed">
            Browse our complete menu of treatments and pricing. Click the image to zoom in for a closer look.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <button
            onClick={() => setZoomed(true)}
            className="group relative w-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Zoom in to view full menu"
          >
            <img
              src={menuImg}
              alt="Vava Spa Services Menu"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full backdrop-blur-sm">
                Tap to zoom
              </span>
            </div>
          </button>
        </div>
      </Container>

      {zoomed && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-start justify-center overflow-y-auto p-4 md:p-8"
          onClick={() => setZoomed(false)}
        >
          <button
            onClick={() => setZoomed(false)}
            className="fixed top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={menuImg}
            alt="Vava Spa Services Menu"
            className="w-full max-w-3xl rounded-2xl shadow-2xl my-8 cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </section>
  );
}
