import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Art Book Publishing Services | Crowell Publishing House",
  description: "High-quality art book publishing for artists, photographers, and galleries. Premium printing and professional layout.",
};

export default function ArtBookPublishingPage() {
  return (
    <ServicePageLayout
      title="Art Book Publishing"
      subtitle="Preserve and Showcase Your Vision in Print"
      description="Art books require a higher level of care and precision. We specialize in high-fidelity color reproduction, premium paper selection, and elegant design to ensure your artwork is presented exactly as you intended."
      iconName="Palette"
      heroImage="/images/art-book-hero.jpg"
      features={[
        {
          title: "High-Fidelity Color Management",
          description: "Precision color grading to ensure your artwork's colors are reproduced accurately.",
        },
        {
          title: "Premium Paper Options",
          description: "A wide selection of high-quality paper stocks, from matte to high-gloss finishes.",
        },
        {
          title: "Custom Large Formats",
          description: "Specialized printing for oversized books and unique coffee table formats.",
        },
        {
          title: "Elegant Layout Design",
          description: "Minimalist design that focuses the reader's attention on your artwork.",
        },
        {
          title: "Hardcover & Specialty Binding",
          description: "Durable hardcover binding with options for foil stamping, embossing, and dust jackets.",
        },
        {
          title: "Gallery & Museum Standards",
          description: "Books produced to the quality standards expected by galleries and art collectors.",
        },
      ]}
      benefits={[
        "Stunning visual presentation of your work",
        "Expert guidance on paper and binding choices",
        "Professional color proofing process",
        "A lasting legacy for your artistic career",
        "Perfect for portfolios, catalogs, and collections",
        "Full support from design to delivery",
      ]}
      process={[
        {
          step: 1,
          title: "Portfolio Consultation",
          description: "We review your artwork and discuss your goals for the book.",
        },
        {
          step: 2,
          title: "Design Concept",
          description: "We create a layout that complements your art and establishes a narrative flow.",
        },
        {
          step: 3,
          title: "Color Proofing",
          description: "We provide high-quality color proofs for your approval before full printing.",
        },
        {
          step: 4,
          title: "Premium Printing",
          description: "Your book is printed using state-of-the-art high-definition equipment.",
        },
        {
          step: 5,
          title: "Binding & Finishing",
          description: "Final binding and specialty touches are applied for a premium finish.",
        },
      ]}
      testimonial={{
        name: "Elena Petrov",
        text: "The quality of my photography book is breathtaking. The color reproduction is perfect, and the paper feels incredible.",
        rating: 5,
      }}
      ctaText="Publish My Art Book"
    />
  );
}
