import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Author Branding Services | Crowell Publishing House",
  description: "Build a professional author brand that connects with readers. Website design, social media strategy, and visual identity.",
};

export default function AuthorBrandingPage() {
  return (
    <ServicePageLayout
      title="Author Branding"
      subtitle="Define Your Identity and Connect with Your Readers"
      description="Successful authors are more than just their books; they are a brand. We help you define your unique voice, create a stunning visual identity, and build a platform that connects you with your audience and sells more books."
      iconName="User"
      heroImage="/images/branding-hero.jpg"
      features={[
        {
          title: "Visual Identity Design",
          description: "Professional logo, color palette, and typography that reflects your author persona.",
        },
        {
          title: "Author Website Design",
          description: "Stunning, responsive websites that showcase your books and collect email leads.",
        },
        {
          title: "Social Media Strategy",
          description: "Customized plans for the platforms where your specific readers spend their time.",
        },
        {
          title: "Email Marketing Setup",
          description: "Building your mailing list with lead magnets and automated welcome sequences.",
        },
        {
          title: "Professional Author Photos",
          description: "Guidance on headshots and lifestyle photography that fits your brand.",
        },
        {
          title: "Brand Voice Development",
          description: "Defining how you communicate with your audience across all channels.",
        },
      ]}
      benefits={[
        "Establish immediate professional credibility",
        "Build a loyal following that buys every new release",
        "Consistent look and feel across all platforms",
        "Higher engagement with your target audience",
        "Clear differentiation from other authors in your genre",
        "Long-term career growth and platform stability",
      ]}
      process={[
        {
          step: 1,
          title: "Discovery Session",
          description: "We dive into your goals, your genre, and what makes you unique as an author.",
        },
        {
          step: 2,
          title: "Brand Strategy",
          description: "We define your target audience and create a plan for your brand's growth.",
        },
        {
          step: 3,
          title: "Visual Identity",
          description: "Our designers create your logo, website, and social media assets.",
        },
        {
          step: 4,
          title: "Platform Build",
          description: "We set up your website, email list, and social profiles for success.",
        },
        {
          step: 5,
          title: "Launch & Growth",
          description: "We launch your brand and provide strategies for ongoing audience building.",
        },
      ]}
      testimonial={{
        name: "Kevin Masters",
        text: "I didn't realize I needed a brand until I worked with Crowell. Now I have a professional platform that actually connects me with my readers!",
        rating: 5,
      }}
      ctaText="Build My Brand"
    />
  );
}
