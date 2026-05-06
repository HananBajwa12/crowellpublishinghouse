import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Layout and Design Services | Crowell Publishing House",
  description: "Comprehensive book layout and interior design. Professional typography and visual flow for a premium reading experience.",
};

export default function BookLayoutDesignPage() {
  return (
    <ServicePageLayout
      title="Book Layout & Design"
      subtitle="Transform Your Manuscript into a Professional Book"
      description="Professional interior design is about more than just fonts. We create a cohesive visual experience that guides the reader, enhances your content, and ensures your book meets the highest publishing standards."
      iconName="Layout"
      heroImage="/images/layout-hero.jpg"
      features={[
        {
          title: "Custom Interior Styling",
          description: "Unique design elements for chapter heads, drop caps, and scene breaks.",
        },
        {
          title: "Expert Typography",
          description: "Selection of fonts that are not only beautiful but also optimized for readability.",
        },
        {
          title: "Visual Hierarchy",
          description: "Clear organization of headings, subheadings, and body text for better flow.",
        },
        {
          title: "Image & Media Integration",
          description: "Professional placement and sizing of photos, charts, and illustrations.",
        },
        {
          title: "Print-Ready Technicals",
          description: "Precision handling of bleed, margins, gutters, and resolution for printing.",
        },
        {
          title: "Consistent Branding",
          description: "Ensuring the interior design perfectly matches your book's cover and brand.",
        },
      ]}
      benefits={[
        "A reading experience that feels professional",
        "Higher reader retention and engagement",
        "Avoid common self-publishing layout errors",
        "Fully optimized for your specific trim size",
        "Expert handling of complex formatting needs",
        "Peace of mind knowing your book is print-ready",
      ]}
      process={[
        {
          step: 1,
          title: "Design Consultation",
          description: "We discuss the tone and style of your book to create a design concept.",
        },
        {
          step: 2,
          title: "Sample Interior",
          description: "We design several sample pages for your approval of the style.",
        },
        {
          step: 3,
          title: "Full Book Layout",
          description: "Our designers format the entire manuscript following the approved concept.",
        },
        {
          step: 4,
          title: "Proofing & Review",
          description: "You review the full design and we make any necessary adjustments.",
        },
        {
          step: 5,
          title: "Final Production",
          description: "We deliver high-resolution, print-ready files for your publisher or printer.",
        },
      ]}
      testimonial={{
        name: "Maria Ortiz",
        text: "The interior design they created for my non-fiction book is stunning. It's clear, professional, and so easy to read!",
        rating: 5,
      }}
      ctaText="Design My Interior"
    />
  );
}
