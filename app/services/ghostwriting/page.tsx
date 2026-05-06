import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Ghostwriting Services | Crowell Publishing House",
  description: "Professional ghostwriting services to bring your story to life. Our expert writers capture your voice and vision to create compelling manuscripts.",
};

export default function GhostwritingPage() {
  return (
    <ServicePageLayout
      title="Ghostwriting Services"
      subtitle="Transform Your Ideas Into a Compelling Manuscript"
      description="Whether you have a rough draft or just an idea, our professional ghostwriters work closely with you to capture your unique voice and bring your story to life. We handle fiction, memoirs, business books, and more."
      iconName="PenTool"
      heroImage="/images/ghostwriting-hero.jpg"
      features={[
        {
          title: "Fiction Writing",
          description: "From romance to thriller, our writers craft engaging narratives that captivate readers from the first page to the last.",
        },
        {
          title: "Memoir & Biography",
          description: "Share your life story with authenticity. We interview, research, and write to preserve your legacy.",
        },
        {
          title: "Business & Self-Help Books",
          description: "Establish your expertise with a professionally written book that positions you as an industry thought leader.",
        },
        {
          title: "Children&apos;s Books",
          description: "Engaging stories for young readers with age-appropriate language and themes that educate and entertain.",
        },
        {
          title: "Academic & Technical Writing",
          description: "Complex topics made accessible through clear, well-researched content that maintains scholarly standards.",
        },
        {
          title: "Speech & Content Writing",
          description: "Powerful speeches, articles, and content that communicate your message with impact and clarity.",
        },
      ]}
      benefits={[
        "Experienced writers across all genres and styles",
        "Complete confidentiality and NDA protection",
        "Your vision, your voice - we just help you express it",
        "Flexible collaboration process tailored to your needs",
        "Unlimited revisions until you are satisfied",
        "Full ownership of your completed manuscript",
      ]}
      process={[
        {
          step: 1,
          title: "Discovery Call",
          description: "We start with an in-depth consultation to understand your vision, goals, and the story you want to tell.",
        },
        {
          step: 2,
          title: "Writer Matching",
          description: "We pair you with a ghostwriter whose expertise and style align perfectly with your project.",
        },
        {
          step: 3,
          title: "Outline & Research",
          description: "Your writer develops a detailed outline and conducts necessary research to ensure accuracy and depth.",
        },
        {
          step: 4,
          title: "Writing & Collaboration",
          description: "Regular check-ins and chapter reviews keep you involved throughout the creative process.",
        },
        {
          step: 5,
          title: "Final Delivery",
          description: "Receive your polished manuscript, ready for editing or publishing, with full rights transferred to you.",
        },
      ]}
      testimonial={{
        name: "Sarah Mitchell",
        text: "I had a story in my heart for years but could never find the words. Crowell Publishing matched me with an incredible ghostwriter who understood my vision perfectly. My memoir is now a bestseller!",
        rating: 5,
      }}
      ctaText="Start Your Book Today"
    />
  );
}
