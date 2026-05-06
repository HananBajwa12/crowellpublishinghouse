import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Kindle Direct Publishing (KDP) Services | Crowell Publishing House",
  description: "Expert help with Amazon Kindle Direct Publishing. Optimization, formatting, and management for KDP authors.",
};

export default function KDPPage() {
  return (
    <ServicePageLayout
      title="Kindle Direct Publishing"
      subtitle="Master the World's Largest Bookstore"
      description="Amazon KDP is the most powerful tool for independent authors. We provide expert management and optimization services to ensure your book stands out on Amazon and reaches its full sales potential."
      iconName="Zap"
      heroImage="/images/kdp-hero.jpg"
      features={[
        {
          title: "KDP Account Setup",
          description: "Professional setup of your Amazon author account and tax information.",
        },
        {
          title: "Keyword & Category Research",
          description: "Data-driven selection of the best keywords and categories to maximize visibility.",
        },
        {
          title: "A+ Content Creation",
          description: "Stunning visual descriptions for your book page to increase conversions.",
        },
        {
          title: "KDP Select Management",
          description: "Expert guidance on whether to join KDP Select and how to use its tools.",
        },
        {
          title: "Price Strategy",
          description: "Optimization of your book's price for maximum profit and sales momentum.",
        },
        {
          title: "Amazon Ads Management",
          description: "Coordinated advertising campaigns to drive targeted traffic to your book.",
        },
      ]}
      benefits={[
        "Maximize your visibility on Amazon",
        "Higher conversion rates from browser to buyer",
        "Strategic use of Amazon's powerful algorithms",
        "Professional appearance among top bestsellers",
        "Save time on the technical details of KDP",
        "Expertise in both Kindle and Print-on-Demand",
      ]}
      process={[
        {
          step: 1,
          title: "KDP Audit",
          description: "We review your current status or plan for Amazon distribution.",
        },
        {
          step: 2,
          title: "Market Research",
          description: "We identify the most profitable keywords and categories for your book.",
        },
        {
          step: 3,
          title: "Account Setup",
          description: "We professionally set up and optimize your KDP book details.",
        },
        {
          step: 4,
          title: "Visual Optimization",
          description: "Creation of A+ content and optimization of your book's Amazon page.",
        },
        {
          step: 5,
          title: "Launch & Iterate",
          description: "We manage your launch and continue to optimize based on data.",
        },
      ]}
      testimonial={{
        name: "James Wilson",
        text: "My book was languishing on page 50 until Crowell optimized my KDP page. Now I'm consistently in the top 10 of my category!",
        rating: 5,
      }}
      ctaText="Optimize My KDP"
    />
  );
}
