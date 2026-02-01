import Button from "./Button";
import { site, waLink } from "../../data/site";

type Props = {
  context?: { service?: string; date?: string; time?: string };
  showSecondary?: boolean; // use rarely
  secondaryHref?: string; // usually "/contact"
  secondaryLabel?: string; // "Contact us" or "Request via form"
  className?: string;
};

export default function BookingCTA({
  context,
  showSecondary = false,
  secondaryHref = "/contact",
  secondaryLabel = "Contact us",
  className,
}: Props) {
  const whatsappHref = waLink(
    site.whatsappPrimary,
    site.whatsappMessage,
    context,
  );

  return (
    <div
      className={["flex flex-wrap gap-3", className].filter(Boolean).join(" ")}
    >
      <a href={whatsappHref} target="_blank" rel="noreferrer">
        <Button size="lg">Book on WhatsApp</Button>
      </a>

      {showSecondary && (
        <a href={secondaryHref}>
          <Button variant="secondary" size="lg">
            {secondaryLabel}
          </Button>
        </a>
      )}
    </div>
  );
}
