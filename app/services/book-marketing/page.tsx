import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Marketing Services | Crowell Publishing House",
  description: "Comprehensive book marketing services to help your book find its audience. From launch campaigns to ongoing promotion, we handle it all.",
};

export default function BookMarketingPage() {
  return (
    <ServicePageLayout
      title="Book Marketing Services"
      subtitle="Get Noticed and Build Your Author Brand"
      description="Writing your book is only half the battle. Our marketing experts develop and execute strategies that get your book in front of the right readers, build your author platform, and drive sales. Let us amplify your voice."
      iconName="Megaphone"
      heroImage="/services/book-marketing.png"
      features={[
        {
          title: "Launch Campaign Strategy",
          description: "Comprehensive pre-launch and launch day strategies designed to maximize visibility and initial sales momentum.",
        },
        {
          title: "Social Media Marketing",
          description: "Engaging content creation and management across platforms where your readers spend their time.",
        },
        {
          title: "Amazon Optimization",
          description: "Keyword research, category selection, and A+ content to improve your book&apos;s discoverability and conversion.",
        },
        {
          title: "Author Website & Branding",
          description: "Professional author websites and cohesive branding that establishes your identity and connects with readers.",
        },
        {
          title: "Email Marketing",
          description: "Build and nurture your reader list with automated sequences and engaging newsletters.",
        },
        {
          title: "Advertising Campaigns",
          description: "Strategic Amazon Ads, Facebook Ads, and BookBub promotions with data-driven optimization.",
        },
      ]}
      benefits={[
        "Marketing strategists who understand the book industry",
        "Custom plans tailored to your genre and goals",
        "Transparent reporting and analytics",
        "Both launch campaigns and ongoing promotion",
        "Author platform building for long-term success",
        "Connections with book bloggers and reviewers",
      ]}
      process={[
        {
          step: 1,
          title: "Strategy Session",
          description: "We analyze your book, target audience, competition, and goals to develop a custom marketing plan.",
        },
        {
          step: 2,
          title: "Platform Building",
          description: "Establish or optimize your author website, social profiles, and email list infrastructure.",
        },
        {
          step: 3,
          title: "Content Creation",
          description: "Develop marketing assets including graphics, ad copy, email sequences, and social content.",
        },
        {
          step: 4,
          title: "Campaign Execution",
          description: "Launch coordinated marketing campaigns across multiple channels for maximum impact.",
        },
        {
          step: 5,
          title: "Optimization & Scaling",
          description: "Monitor results, optimize performance, and scale successful strategies for continued growth.",
        },
      ]}
      testimonial={{
        name: "David Chen",
        text: "I was completely lost when it came to marketing. Crowell Publishing built my entire author platform from scratch and my book hit the bestseller list within two weeks of launch!",
        rating: 5,
      }}
      ctaText="Grow My Audience"
    />
  );
}
