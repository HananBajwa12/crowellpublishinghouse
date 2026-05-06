import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Poetry Publishing Services | Crowell Publishing House",
  description: "Specialized publishing services for poets. Beautiful layouts and high-quality printing for your verse.",
};

export default function PoetryPublishingPage() {
  return (
    <ServicePageLayout
      title="Poetry Publishing"
      subtitle="Honoring the Art of the Written Word"
      description="Poetry requires a delicate touch. We provide specialized layout and design services that respect the white space and rhythm of your verse, creating beautiful books that are a joy to read and hold."
      iconName="Feather"
      heroImage="/images/poetry-hero.jpg"
      features={[
        {
          title: "Sensitive Interior Layout",
          description: "Precise placement of your poems to ensure line breaks and stanzas are preserved exactly.",
        },
        {
          title: "Elegant Minimalist Design",
          description: "Covers and interior designs that reflect the tone and emotion of your work.",
        },
        {
          title: "Premium Specialty Paper",
          description: "Options for cream or textured paper that feels as good as it looks.",
        },
        {
          title: "Limited Edition Printing",
          description: "Specialized support for small print runs and collectible editions.",
        },
        {
          title: "Poetry-Focused Marketing",
          description: "Strategies to connect with the poetry community and literary journals.",
        },
        {
          title: "Ebook Optimization for Verse",
          description: "Technical expertise to ensure your poetry's layout remains intact on digital devices.",
        },
      ]}
      benefits={[
        "Professional presentation of your creative work",
        "Layouts that enhance the reading experience",
        "Support from experts who understand poetry",
        "High-quality physical books you'll be proud of",
        "Full control over the artistic direction",
        "Expertise in both print and digital verse",
      ]}
      process={[
        {
          step: 1,
          title: "Artistic Consultation",
          description: "We discuss the themes and style of your poetry to guide the design.",
        },
        {
          step: 2,
          title: "Verse Formatting",
          description: "Our experts meticulously format your poems, respecting every line break.",
        },
        {
          step: 3,
          title: "Cover Creation",
          description: "A custom cover design that captures the essence of your collection.",
        },
        {
          step: 4,
          title: "Paper Selection",
          description: "Choosing the perfect paper and binding to complement your work.",
        },
        {
          step: 5,
          title: "Final Printing",
          description: "Your collection is printed with the highest attention to detail and quality.",
        },
      ]}
      testimonial={{
        name: "Claire Bennett",
        text: "They treated my poems with so much respect. The layout is beautiful, and the book itself feels like a work of art.",
        rating: 5,
      }}
      ctaText="Publish My Poetry"
    />
  );
}
