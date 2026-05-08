import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Publishing Services | Crowell Publishing House",
  description: "Full-service book publishing packages that take your manuscript from draft to published book. Print, eBook, and audiobook production.",
};

export default function BookPublishingPage() {
  return (
    <ServicePageLayout
      title="Book Publishing Services"
      subtitle="From Manuscript to Published Author"
      description="Our comprehensive publishing packages handle every aspect of bringing your book to market. From editing and design to production and distribution, we provide the complete infrastructure you need to publish professionally while you retain full rights and control."
      iconName="BookOpen"
      heroImage="/services/book-publishing.png"
      features={[
        {
          title: "Complete Publishing Packages",
          description: "All-inclusive packages covering editing, design, formatting, ISBN, and distribution in one seamless process.",
        },
        {
          title: "Print Book Production",
          description: "High-quality paperback and hardcover printing with premium paper options and professional binding.",
        },
        {
          title: "eBook Creation",
          description: "Professionally formatted EPUB and MOBI files optimized for all major e-readers and platforms.",
        },
        {
          title: "Audiobook Production",
          description: "Professional narration, audio engineering, and distribution to Audible, iTunes, and more.",
        },
        {
          title: "ISBN & Copyright",
          description: "We handle ISBN assignment, barcode creation, and guide you through copyright registration.",
        },
        {
          title: "Author Copies",
          description: "Discounted author copies for events, gifts, and direct sales with bulk pricing available.",
        },
      ]}
      benefits={[
        "Retain 100% of your rights and creative control",
        "Higher royalties than traditional publishing",
        "Professional quality matching Big Five publishers",
        "Faster time to market - publish in weeks, not years",
        "Transparent pricing with no hidden fees",
        "Dedicated project manager throughout the process",
      ]}
      process={[
        {
          step: 1,
          title: "Consultation",
          description: "Discuss your book, goals, and timeline. We recommend the perfect package for your needs.",
        },
        {
          step: 2,
          title: "Editorial Phase",
          description: "Your manuscript goes through professional editing to ensure it meets publishing standards.",
        },
        {
          step: 3,
          title: "Design Phase",
          description: "Cover design and interior formatting create a beautiful, professional presentation.",
        },
        {
          step: 4,
          title: "Production",
          description: "Files are prepared for all formats - print, eBook, and audiobook as applicable.",
        },
        {
          step: 5,
          title: "Publication",
          description: "Your book goes live across all distribution channels, and you become a published author!",
        },
      ]}
      testimonial={{
        name: "Robert Martinez",
        text: "The full publishing package was exactly what I needed. They handled everything professionally and my book looks just as good as anything from a major publisher. The whole process was smooth and stress-free.",
        rating: 5,
      }}
      ctaText="Publish My Book"
    />
  );
}
