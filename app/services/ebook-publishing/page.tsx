import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Ebook Publishing Services | Crowell Publishing House",
  description: "Professional ebook publishing services to help you reach readers on every digital platform. From Kindle to Apple Books, we handle the technical details.",
};

export default function EbookPublishingPage() {
  return (
    <ServicePageLayout
      title="Ebook Publishing"
      subtitle="Digital Publishing Made Simple"
      description="In today's digital world, an ebook is essential for reaching a global audience. We provide high-quality ebook conversion and publishing services that ensure your book looks perfect on every device, from Kindles to iPads."
      iconName="BookOpen"
      heroImage="/images/ebook-hero.jpg"
      features={[
        {
          title: "Multi-Platform Formatting",
          description: "Conversion to EPUB, MOBI, and PDF formats compatible with all major ereaders and platforms.",
        },
        {
          title: "Interactive Features",
          description: "Support for clickable tables of contents, internal links, and external references for a seamless reading experience.",
        },
        {
          title: "Global Distribution",
          description: "We list your ebook on Amazon, Apple Books, Barnes & Noble, Kobo, and many other digital retailers.",
        },
        {
          title: "Metadata Optimization",
          description: "Strategic keyword and category selection to help readers find your book in crowded digital stores.",
        },
        {
          title: "DRM Protection",
          description: "Optional Digital Rights Management to protect your work from unauthorized distribution.",
        },
        {
          title: "Version Control",
          description: "Easily update your ebook content across all platforms whenever you need to make changes.",
        },
      ]}
      benefits={[
        "Reach a global audience instantly",
        "Higher royalty rates compared to print",
        "Professional formatting for all devices",
        "Expertise in Amazon KDP and other platforms",
        "Seamless integration with print versions",
        "Lifetime support for technical issues",
      ]}
      process={[
        {
          step: 1,
          title: "File Preparation",
          description: "We take your final manuscript and prepare it for the digital conversion process.",
        },
        {
          step: 2,
          title: "Professional Conversion",
          description: "Our experts convert your book into various ebook formats, ensuring layout integrity.",
        },
        {
          step: 3,
          title: "Quality Assurance",
          description: "Rigorous testing on multiple devices to ensure a perfect reading experience.",
        },
        {
          step: 4,
          title: "Distribution Setup",
          description: "We set up your accounts and upload your ebook to major global retailers.",
        },
        {
          step: 5,
          title: "Launch & Support",
          description: "Your ebook goes live, and we provide ongoing support for any updates or issues.",
        },
      ]}
      testimonial={{
        name: "Sarah Jenkins",
        text: "The ebook conversion was flawless. My book looks amazing on my Kindle, and the process was so much easier than I expected!",
        rating: 5,
      }}
      ctaText="Publish My Ebook"
    />
  );
}
