import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Photo Book Publishing Services | Crowell Publishing House",
  description: "Professional photo book publishing for photographers and families. High-quality printing and beautiful layouts.",
};

export default function PhotoBookPublishingPage() {
  return (
    <ServicePageLayout
      title="Photo Book Publishing"
      subtitle="Your Memories and Vision, Captured in Print"
      description="Whether you're a professional photographer or want to preserve family memories, we provide the highest quality photo book publishing with stunning color reproduction and professional-grade materials."
      iconName="Image"
      heroImage="/images/photo-hero.jpg"
      features={[
        {
          title: "Superior Color Printing",
          description: "Vibrant, true-to-life color reproduction for all your photography.",
        },
        {
          title: "Professional Design Templates",
          description: "Elegant, clean layouts that let your photos take center stage.",
        },
        {
          title: "Custom Photo Editing",
          description: "Optional professional retouching and color correction for your images.",
        },
        {
          title: "Durable Premium Binding",
          description: "High-quality hardcover and softcover options built to last a lifetime.",
        },
        {
          title: "Specialty Paper Finishes",
          description: "Lustre, matte, and glossy papers to perfectly complement your style.",
        },
        {
          title: "Collaborative Layout Process",
          description: "Work directly with our designers to organize and present your photos.",
        },
      ]}
      benefits={[
        "Showcase your photography in a professional format",
        "A beautiful, tangible legacy for your images",
        "Expert guidance on layout and photo selection",
        "Museum-quality printing and materials",
        "Perfect for portfolios, gifts, and family archives",
        "Full copyright ownership of your book",
      ]}
      process={[
        {
          step: 1,
          title: "Photo Selection",
          description: "We help you select and organize your best photos for the book.",
        },
        {
          step: 2,
          title: "Layout Design",
          description: "Our designers create a visual flow that tells a story through your images.",
        },
        {
          step: 3,
          title: "Color Proofing",
          description: "You review digital or physical proofs to ensure color accuracy.",
        },
        {
          step: 4,
          title: "Quality Printing",
          description: "Your book is printed using the latest high-definition photo printing tech.",
        },
        {
          step: 5,
          title: "Final Binding",
          description: "The book is bound and finished to your specifications for a premium look.",
        },
      ]}
      testimonial={{
        name: "Linda Thorne",
        text: "The photo book of my travel photography is absolutely stunning. The paper quality and color depth are better than I ever imagined.",
        rating: 5,
      }}
      ctaText="Publish My Photo Book"
    />
  );
}
