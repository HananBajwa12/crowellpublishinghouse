import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Cover Design Services | Crowell Publishing House",
  description: "Award-winning book cover design that captures your story and stops readers in their tracks. Professional designs for all genres.",
};

export default function BookCoverDesignPage() {
  return (
    <ServicePageLayout
      title="Book Cover Design"
      subtitle="A Cover That Sells Your Story"
      description="They say don't judge a book by its cover, but every reader does. Our world-class designers create stunning, market-focused book covers that stand out on the shelves and capture the essence of your writing."
      iconName="Palette"
      heroImage="/images/cover-design-hero.jpg"
      features={[
        {
          title: "Custom Illustrations",
          description: "Unique, hand-drawn or digital illustrations tailored specifically to your book's themes.",
        },
        {
          title: "Genre-Specific Design",
          description: "Designs that follow industry trends and reader expectations for your specific genre.",
        },
        {
          title: "Premium Typography",
          description: "Expert font selection and layout to ensure your title and author name are legible and impactful.",
        },
        {
          title: "Full Wrap Design",
          description: "Complete design including front, back, and spine for print versions.",
        },
        {
          title: "Ebook Optimization",
          description: "Covers optimized to look great as thumbnails on digital retailers like Amazon.",
        },
        {
          title: "Multiple Concepts",
          description: "We provide several initial concepts for you to choose from and refine.",
        },
      ]}
      benefits={[
        "Increased click-through rates on retail sites",
        "Professional appearance that builds author trust",
        "Covers that accurately reflect your story's tone",
        "High-resolution files ready for print and web",
        "Unlimited revisions until you're satisfied",
        "Market-tested design principles",
      ]}
      process={[
        {
          step: 1,
          title: "Design Brief",
          description: "We discuss your book, your vision, and your target audience to guide the design.",
        },
        {
          step: 2,
          title: "Concept Creation",
          description: "Our designers create initial cover concepts based on your brief.",
        },
        {
          step: 3,
          title: "Review & Feedback",
          description: "You choose your favorite concept and provide feedback for refinements.",
        },
        {
          step: 4,
          title: "Final Refinements",
          description: "We polish the chosen design and create the full wrap for print.",
        },
        {
          step: 5,
          title: "File Delivery",
          description: "We deliver high-resolution files in all necessary formats for print and digital.",
        },
      ]}
      testimonial={{
        name: "Michael Roberts",
        text: "The cover they designed for my thriller is breathtaking. I've had so many compliments on it, and it's definitely helping with sales!",
        rating: 5,
      }}
      ctaText="Design My Cover"
    />
  );
}
