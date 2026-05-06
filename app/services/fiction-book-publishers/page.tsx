import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Fiction Book Publishing Services | Crowell Publishing House",
  description: "Specialized publishing for fiction authors. From thrillers to romance, we help you share your stories with the world.",
};

export default function FictionPublishingPage() {
  return (
    <ServicePageLayout
      title="Fiction Book Publishers"
      subtitle="Bringing Your Stories to Life in Print and Digital"
      description="Fiction authors need a partner who understands the nuances of storytelling. We provide specialized editing, cover design, and marketing strategies tailored specifically to your genre and your readers."
      iconName="Book"
      heroImage="/images/fiction-hero.jpg"
      features={[
        {
          title: "Genre-Specific Editing",
          description: "Editors who specialize in your specific genre, from sci-fi to historical fiction.",
        },
        {
          title: "Market-Focused Cover Art",
          description: "Covers designed to catch the eye of readers in your specific sub-genre.",
        },
        {
          title: "Strategic Fiction Marketing",
          description: "Connecting with book bloggers, reviewers, and genre-specific communities.",
        },
        {
          title: "Global Retail Distribution",
          description: "Your book available in bookstores, libraries, and online retailers worldwide.",
        },
        {
          title: "Series Management",
          description: "Support for multi-book series with consistent branding and launch strategies.",
        },
        {
          title: "Audiobook Production",
          description: "Professional narration to bring your characters and world to life in audio.",
        },
      ]}
      benefits={[
        "Professional quality that respects your creative vision",
        "Reach a global audience of fiction readers",
        "Expert guidance on genre trends and expectations",
        "Higher potential for sales and reader discovery",
        "A partner who is as passionate about stories as you are",
        "Full support from first draft to final publication",
      ]}
      process={[
        {
          step: 1,
          title: "Manuscript Review",
          description: "We read your story and discuss your goals for publication.",
        },
        {
          step: 2,
          title: "Artistic Production",
          description: "Creating a cover and interior that perfectly reflects your story's tone.",
        },
        {
          step: 3,
          title: "Editing & Polishing",
          description: "Genre-expert editing to ensure your story is as strong as it can be.",
        },
        {
          step: 4,
          title: "Strategic Launch",
          description: "A coordinated launch designed to build momentum and drive sales.",
        },
        {
          step: 5,
          title: "Global Distribution",
          description: "Managing the complex details of global print and digital distribution.",
        },
      ]}
      testimonial={{
        name: "Samantha Greene",
        text: "Crowell Publishing understood exactly what I was trying to do with my mystery novel. The result is a book that I'm incredibly proud of!",
        rating: 5,
      }}
      ctaText="Publish My Story"
    />
  );
}
