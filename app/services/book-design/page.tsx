import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Design Services | Crowell Publishing House",
  description: "Professional book cover design and interior formatting services. Create stunning visuals that captivate readers and boost sales.",
};

export default function BookDesignPage() {
  return (
    <ServicePageLayout
      title="Book Design Services"
      subtitle="Beautiful Books That Captivate Readers"
      description="First impressions matter. Our award-winning designers create stunning book covers that grab attention and interior layouts that provide an exceptional reading experience. Stand out in a crowded marketplace with professional design."
      iconName="Palette"
      heroImage="/images/design-hero.jpg"
      features={[
        {
          title: "Custom Cover Design",
          description: "Eye-catching covers designed specifically for your book and target audience, with multiple concepts to choose from.",
        },
        {
          title: "Interior Layout & Formatting",
          description: "Professional typesetting for both print and eBook, ensuring readability and visual appeal across all formats.",
        },
        {
          title: "Illustration Services",
          description: "Custom illustrations, chapter headers, and decorative elements that bring your book to life.",
        },
        {
          title: "Series Branding",
          description: "Cohesive design across your book series with consistent visual identity and recognizable branding.",
        },
        {
          title: "Print-Ready Files",
          description: "Files prepared to exact specifications for Amazon KDP, IngramSpark, and traditional printers.",
        },
        {
          title: "eBook Conversion",
          description: "Properly formatted EPUB and MOBI files that display beautifully on all e-readers and devices.",
        },
      ]}
      benefits={[
        "Award-winning designers with publishing expertise",
        "Genre-appropriate designs that resonate with readers",
        "Unlimited revisions until you love your cover",
        "All source files provided upon completion",
        "3D mockups and marketing materials included",
        "Designs optimized for thumbnail visibility",
      ]}
      process={[
        {
          step: 1,
          title: "Design Brief",
          description: "Complete our questionnaire about your book, genre, target readers, and design preferences.",
        },
        {
          step: 2,
          title: "Concept Development",
          description: "Our designers create 2-3 unique cover concepts based on your brief and market research.",
        },
        {
          step: 3,
          title: "Refinement",
          description: "Choose your favorite concept and work with your designer to perfect every detail.",
        },
        {
          step: 4,
          title: "Interior Design",
          description: "We format your manuscript with professional typography, margins, and page layout.",
        },
        {
          step: 5,
          title: "Final Delivery",
          description: "Receive all print-ready and digital files, plus mockups for your marketing needs.",
        },
      ]}
      testimonial={{
        name: "Jennifer Walsh",
        text: "My cover stops people in their tracks! Sales increased 300% after the redesign. The interior formatting is equally beautiful - readers constantly compliment how professional the book looks.",
        rating: 5,
      }}
      ctaText="Design My Book"
    />
  );
}
