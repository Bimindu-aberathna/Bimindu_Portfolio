import { portfolioData } from "@/app/data/portfolio";

function WhatsApp_contact() {
  const message = "Hello Bimindu! I'm visiting your portfolio.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `${portfolioData.whatsapp_no}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 lg:bottom-10 lg:right-15 z-50 inline-flex h-18 w-18 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-110 "
    >
      <i className="ph ph-whatsapp-logo text-5xl"></i>
    </a>
  );
}

export default WhatsApp_contact;