type Props = {
  images: { src: string; alt: string }[];
};

export default function ImageMarquee({ images }: Props) {
  // duplicate list so the loop is seamless
  const loop = [...images, ...images];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
      {/* soft fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg to-transparent z-10" />

      <div className="flex w-[200%] animate-marquee gap-3 p-3">
        {loop.map((img, i) => (
          <div
            key={`${img.alt}-${i}`}
            className="h-28 w-40 shrink-0 overflow-hidden rounded-2xl border border-border"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.06]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
