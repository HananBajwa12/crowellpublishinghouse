import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Printing Services | Crowell Publishing House",
  description: "High-quality book printing services for all formats. Hardcover, softcover, and specialty printing at competitive rates.",
};

export default function BookPrintingPage() {
  return (
    <ServicePageLayout
      title="Book Printing"
      subtitle="The Finest Quality for Your Masterpiece"
      description="Whether you need 10 copies or 10,000, we provide premium book printing services with the highest quality materials, state-of-the-art technology, and a wide range of binding and finishing options."
      iconName="Printer"
      heroImage="/images/printing-hero.jpg"
      features={[
        {
          title: "Offset & Digital Printing",
          description: "Choosing the best technology for your specific run size and quality needs.",
        },
        {
          title: "Hardcover & Softcover",
          description: "Durable case-binding and flexible perfect-binding options for any book.",
        },
        {
          title: "Premium Specialty Finishes",
          description: "Foil stamping, embossing, spot UV, and matte or gloss lamination.",
        },
        {
          title: "Custom Trim Sizes",
          description: "Standard industry sizes or completely custom dimensions for unique projects.",
        },
        {
          title: "Environmentally Friendly",
          description: "Options for recycled paper and sustainable printing practices.",
        },
        {
          title: "Global Shipping & Fulfillment",
          description: "Secure packaging and worldwide delivery of your finished books.",
        },
      ]}
      benefits={[
        "Professional bookstore-quality printing",
        "Expert guidance on materials and binding",
        "Competitive pricing for all run sizes",
        "Fast turnaround times for urgent projects",
        "Guaranteed quality and durability",
        "Personalized support throughout the process",
      ]}
      process={[
        {
          step: 1,
          title: "Project Quote",
          description: "We provide a detailed estimate based on your specs and quantity.",
        },
        {
          step: 2,
          title: "File Preparation",
          description: "We check your files for technical issues before they go to press.",
        },
        {
          step: 3,
          title: "Physical Proofing",
          description: "You receive a physical sample to approve before the full run.",
        },
        {
          step: 4,
          title: "Full Production",
          description: "Your books are printed, bound, and finished in our state-of-the-art facility.",
        },
        {
          step: 5,
          title: "Quality Check & Ship",
          description: "A final inspection before your books are securely shipped to you.",
        },
      ]}
      testimonial={{
        name: "Sanjay Gupta",
        text: "The print quality is simply amazing. The colors are vibrant, the binding is solid, and the books were delivered ahead of schedule!",
        rating: 5,
      }}
      ctaText="Get Printing Quote"
    />
  );
}
