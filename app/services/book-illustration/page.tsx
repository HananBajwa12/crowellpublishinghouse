import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Illustration Services | Crowell Publishing House",
  description: "Professional book illustration for children's books, novels, and educational materials. Bring your characters and world to life.",
};

export default function BookIllustrationPage() {
  return (
    <ServicePageLayout
      title="Book Illustration"
      subtitle="Visual Storytelling at its Finest"
      description="Whether you're writing a children's book or need detailed diagrams for a textbook, our talented illustrators bring your ideas to life with stunning visuals that complement and enhance your narrative."
      iconName="Palette"
      heroImage="/images/illustration-hero.jpg"
      features={[
        {
          title: "Character Design",
          description: "Development of unique and memorable characters that resonate with your audience.",
        },
        {
          title: "Children's Book Illustration",
          description: "Vibrant, engaging illustrations designed specifically for younger readers.",
        },
        {
          title: "Technical Illustrations",
          description: "Precise diagrams and charts for non-fiction and educational books.",
        },
        {
          title: "Cover Art Illustration",
          description: "Custom illustrated covers that stand out in any bookstore.",
        },
        {
          title: "Various Styles",
          description: "From watercolor and ink to modern digital art and 3D modeling.",
        },
        {
          title: "Sequential Art",
          description: "Comics, graphic novels, and storyboards tailored to your narrative.",
        },
      ]}
      benefits={[
        "Professional artists with publishing experience",
        "Full copyright ownership for the author",
        "Styles tailored to your specific genre",
        "Seamless integration with layout and design",
        "High-resolution files for quality printing",
        "Collaborative process with the illustrator",
      ]}
      process={[
        {
          step: 1,
          title: "Style Selection",
          description: "We review portfolios and select an illustration style that fits your book.",
        },
        {
          step: 2,
          title: "Character Sketches",
          description: "The artist develops initial sketches of characters and key scenes for your approval.",
        },
        {
          step: 3,
          title: "Storyboarding",
          description: "We map out the illustrations throughout the book to ensure narrative flow.",
        },
        {
          step: 4,
          title: "Final Rendering",
          description: "The artist completes the final, full-color illustrations.",
        },
        {
          step: 5,
          title: "Final Review",
          description: "A final check to ensure all illustrations meet quality standards and fit the layout.",
        },
      ]}
      testimonial={{
        name: "Emily Watson",
        text: "The illustrations for my children's book exceeded my wildest dreams. The characters are so full of life and personality!",
        rating: 5,
      }}
      ctaText="Hire an Illustrator"
    />
  );
}
