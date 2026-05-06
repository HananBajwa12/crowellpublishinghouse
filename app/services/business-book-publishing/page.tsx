import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Business Book Publishing Services | Crowell Publishing House",
  description: "Establish your authority with a professional business book. Expert publishing services for entrepreneurs and leaders.",
};

export default function BusinessBookPublishingPage() {
  return (
    <ServicePageLayout
      title="Business Book Publishing"
      subtitle="Elevate Your Brand and Share Your Expertise"
      description="A professionally published book is the ultimate business card. We help entrepreneurs, executives, and thought leaders share their knowledge, build authority, and generate new leads through high-quality publishing."
      iconName="Globe"
      heroImage="/images/business-hero.jpg"
      features={[
        {
          title: "Thought Leadership Strategy",
          description: "Aligning your book's content with your business goals and personal brand.",
        },
        {
          title: "Expert Ghostwriting",
          description: "Optional services to help you get your ideas onto the page in a professional voice.",
        },
        {
          title: "Marketing for Authority",
          description: "Strategies to use your book for speaking engagements, leads, and media coverage.",
        },
        {
          title: "Professional Charts & Graphs",
          description: "High-quality visualization of your data and business concepts.",
        },
        {
          title: "Global Business Distribution",
          description: "Ensuring your book is available where business leaders and professionals shop.",
        },
        {
          title: "Corporate Gifting Support",
          description: "Custom editions and bulk ordering for your clients and team.",
        },
      ]}
      benefits={[
        "Instant authority and credibility in your field",
        "Generate leads and new business opportunities",
        "Higher fees for speaking and consulting",
        "A platform for sharing your unique methods",
        "Professional quality that reflects your brand",
        "Ongoing support for book-based marketing",
      ]}
      process={[
        {
          step: 1,
          title: "Strategic Session",
          description: "We define your book's goal, target audience, and business alignment.",
        },
        {
          step: 2,
          title: "Content Development",
          description: "Writing, ghostwriting, or editing your manuscript for maximum impact.",
        },
        {
          step: 3,
          title: "Authority Design",
          description: "Creating a cover and interior that screams professionalism and expertise.",
        },
        {
          step: 4,
          title: "Strategic Launch",
          description: "A coordinated launch designed to build authority and drive sales.",
        },
        {
          step: 5,
          title: "Post-Launch Support",
          description: "Help using your book to grow your business and influence.",
        },
      ]}
      testimonial={{
        name: "Gregory Vance",
        text: "Publishing my book with Crowell changed my career. It's opened doors to speaking engagements I never thought possible.",
        rating: 5,
      }}
      ctaText="Grow My Brand"
    />
  );
}
