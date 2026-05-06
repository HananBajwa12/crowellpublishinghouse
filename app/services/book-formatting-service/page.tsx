import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Formatting Services | Crowell Publishing House",
  description: "Professional interior book formatting for print and ebook. Ensure your book looks professional and is easy to read.",
};

export default function BookFormattingPage() {
  return (
    <ServicePageLayout
      title="Book Formatting"
      subtitle="Interior Design for a Professional Reading Experience"
      description="Don't let poor formatting distract your readers. Our professional layout experts ensure your book's interior is beautiful, readable, and meets all industry standards for both print and digital editions."
      iconName="Layout"
      heroImage="/images/formatting-hero.jpg"
      features={[
        {
          title: "Custom Interior Design",
          description: "Unique chapter headings, scene breaks, and typography tailored to your book's genre.",
        },
        {
          title: "Print-Ready Layouts",
          description: "Formatting for various trim sizes with proper margins, gutters, and bleed.",
        },
        {
          title: "Ebook Conversion",
          description: "Reflowable EPUB and MOBI files that look great on all digital devices.",
        },
        {
          title: "Complex Layout Support",
          description: "Expert handling of images, tables, footnotes, and multi-column layouts.",
        },
        {
          title: "Professional Typography",
          description: "Selection of readable, licensed fonts that complement your cover and story.",
        },
        {
          title: "Global Compatibility",
          description: "Files formatted for KDP, IngramSpark, and all major publishing platforms.",
        },
      ]}
      benefits={[
        "Professional look and feel for your book",
        "Improved readability and reader experience",
        "Guaranteed acceptance by printers and retailers",
        "High-quality files ready for distribution",
        "Save time and avoid technical frustration",
        "Consistency across print and digital versions",
      ]}
      process={[
        {
          step: 1,
          title: "Requirements Gathering",
          description: "We discuss your trim size, font preferences, and specific layout needs.",
        },
        {
          step: 2,
          title: "Sample Chapter",
          description: "We provide a sample chapter for your approval of the design and typography.",
        },
        {
          step: 3,
          title: "Full Layout",
          description: "Our experts format the entire manuscript according to the approved style.",
        },
        {
          step: 4,
          title: "Author Review",
          description: "You review the full layout and provide feedback for any final adjustments.",
        },
        {
          step: 5,
          title: "Final Delivery",
          description: "We provide print-ready PDFs and ebook files in multiple formats.",
        },
      ]}
      testimonial={{
        name: "Jessica Lane",
        text: "I tried to format my book myself but it was a nightmare. Crowell's team made it look professional and beautiful in no time!",
        rating: 5,
      }}
      ctaText="Format My Book"
    />
  );
}
