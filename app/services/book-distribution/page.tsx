import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Distribution Services | Crowell Publishing House",
  description: "Global book distribution services to get your book into bookstores, libraries, and online retailers worldwide.",
};

export default function BookDistributionPage() {
  return (
    <ServicePageLayout
      title="Global Book Distribution"
      subtitle="Reach Readers Worldwide"
      description="Your book deserves a global audience. We facilitate distribution through all major channels including Amazon, Barnes & Noble, Apple Books, libraries, and 40,000+ retailers worldwide. Print, eBook, and audiobook - we cover every format."
      iconName="Globe"
      heroImage="/images/distribution-hero.jpg"
      features={[
        {
          title: "Amazon KDP Setup",
          description: "Complete setup and optimization for both Kindle eBooks and print-on-demand paperbacks and hardcovers.",
        },
        {
          title: "Wide Distribution",
          description: "Distribution to Apple Books, Kobo, Barnes & Noble, Google Play, and dozens of international retailers.",
        },
        {
          title: "IngramSpark Publishing",
          description: "Access to 40,000+ retailers and libraries worldwide with professional-grade print quality.",
        },
        {
          title: "Library Distribution",
          description: "Get your book into public and academic libraries through specialized distribution channels.",
        },
        {
          title: "International Markets",
          description: "Reach readers in the UK, Canada, Australia, Europe, and beyond with localized distribution.",
        },
        {
          title: "Audiobook Distribution",
          description: "Distribute your audiobook through Audible, iTunes, and other major audio platforms.",
        },
      ]}
      benefits={[
        "Access to 40,000+ retailers and libraries globally",
        "Competitive royalty rates with transparent reporting",
        "ISBN assignment and barcode generation included",
        "Print-on-demand means no inventory costs",
        "Expanded distribution to brick-and-mortar stores",
        "Dedicated support for distribution issues",
      ]}
      process={[
        {
          step: 1,
          title: "Distribution Strategy",
          description: "We help you decide which platforms and formats align best with your goals and target readers.",
        },
        {
          step: 2,
          title: "Account Setup",
          description: "We set up your accounts on all chosen platforms with optimized metadata and categories.",
        },
        {
          step: 3,
          title: "File Preparation",
          description: "Ensure all files meet platform specifications for print, eBook, and audiobook formats.",
        },
        {
          step: 4,
          title: "Launch & Monitor",
          description: "Coordinate release across all platforms and monitor for any distribution issues.",
        },
        {
          step: 5,
          title: "Ongoing Management",
          description: "Handle pricing updates, promotions, and expansion to additional markets over time.",
        },
      ]}
      testimonial={{
        name: "Amanda Roberts",
        text: "I had no idea how complex global distribution could be. Crowell Publishing handled everything and now my book is available in bookstores across three continents. The library orders alone have been incredible!",
        rating: 5,
      }}
      ctaText="Distribute My Book"
    />
  );
}
