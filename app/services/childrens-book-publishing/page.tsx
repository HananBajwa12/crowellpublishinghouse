import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Children's Book Publishing Services | Crowell Publishing House",
  description: "Specialized publishing for children's books. Vibrant illustrations, engaging layouts, and high-quality printing for young readers.",
};

export default function ChildrensBookPublishingPage() {
  return (
    <ServicePageLayout
      title="Children's Book Publishing"
      subtitle="Inspiring the Next Generation of Readers"
      description="Children's books require a unique blend of vibrant art and engaging storytelling. We specialize in high-quality illustration, durable binding, and layout design that captures the imagination of young readers."
      iconName="Smile"
      heroImage="/images/children-hero.jpg"
      features={[
        {
          title: "Stunning Illustrations",
          description: "Access to world-class illustrators who specialize in children's media.",
        },
        {
          title: "Durable Kid-Friendly Binding",
          description: "Options for sturdy board books, hardcovers, and high-quality softcovers.",
        },
        {
          title: "Age-Appropriate Layout",
          description: "Typography and layouts designed specifically for different reading levels.",
        },
        {
          title: "Vibrant Color Printing",
          description: "High-fidelity printing that brings every character and scene to life.",
        },
        {
          title: "Safety Standards Compliance",
          description: "Ensuring all materials used meet safety standards for children's products.",
        },
        {
          title: "Digital Interactive Options",
          description: "Enhanced ebooks with animations and audio for a modern reading experience.",
        },
      ]}
      benefits={[
        "Professional quality that competes with major publishers",
        "Engage young readers with beautiful visuals",
        "Expert guidance on age-appropriate design",
        "Durable books that can withstand frequent use",
        "Full support from illustration to distribution",
        "A beautiful legacy for your children's story",
      ]}
      process={[
        {
          step: 1,
          title: "Concept Development",
          description: "We discuss your story and the target age group for your book.",
        },
        {
          step: 2,
          title: "Illustration Casting",
          description: "We help you find the perfect illustrator to bring your story to life.",
        },
        {
          step: 3,
          title: "Storyboarding",
          description: "Mapping out the visuals and text across every page for perfect pacing.",
        },
        {
          step: 4,
          title: "Production & Proofing",
          description: "Managing the printing and ensuring colors and binding are perfect.",
        },
        {
          step: 5,
          title: "Global Distribution",
          description: "Getting your book into bookstores, libraries, and online retailers.",
        },
      ]}
      testimonial={{
        name: "Bethany Reed",
        text: "The team at Crowell made my dream of publishing a children's book a reality. The illustrations are magical and the quality is incredible!",
        rating: 5,
      }}
      ctaText="Publish My Children's Book"
    />
  );
}
