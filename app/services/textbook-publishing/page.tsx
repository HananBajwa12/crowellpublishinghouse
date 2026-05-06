import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Textbook Publishing Services | Crowell Publishing House",
  description: "Professional textbook publishing for educators and institutions. Complex layouts, diagrams, and educational standards.",
};

export default function TextbookPublishingPage() {
  return (
    <ServicePageLayout
      title="Textbook Publishing"
      subtitle="Education Through Professional Quality"
      description="Textbooks require specialized layouts and high-fidelity printing. We help educators and academic institutions produce high-quality textbooks with complex diagrams, indices, and educational features."
      iconName="GraduationCap"
      heroImage="/images/textbook-hero.jpg"
      features={[
        {
          title: "Complex Layout Design",
          description: "Expert handling of multi-column text, sidebars, and call-out boxes.",
        },
        {
          title: "Technical Illustration",
          description: "Professional creation of diagrams, charts, and educational visuals.",
        },
        {
          title: "Comprehensive Indexing",
          description: "Creation of professional, easy-to-navigate indices and tables of contents.",
        },
        {
          title: "Durable Academic Binding",
          description: "Heavy-duty binding options designed for frequent use in classrooms.",
        },
        {
          title: "Digital Companion Versions",
          description: "Interactive digital editions for use on tablets and computers.",
        },
        {
          title: "Fact-Checking & Review",
          description: "Optional editorial support to ensure academic accuracy and clarity.",
        },
      ]}
      benefits={[
        "Professional quality for academic environments",
        "Clear, readable presentation of complex info",
        "Expertise in technical and academic standards",
        "Durable books that last for years of study",
        "Support for both small and large print runs",
        "Seamless integration of text and visuals",
      ]}
      process={[
        {
          step: 1,
          title: "Academic Consultation",
          description: "We discuss your educational goals and content requirements.",
        },
        {
          step: 2,
          title: "Structure Design",
          description: "We create a logical, easy-to-follow structure for your complex content.",
        },
        {
          step: 3,
          title: "Technical Production",
          description: "Our experts format the text and create all necessary illustrations.",
        },
        {
          step: 4,
          title: "Rigorous Review",
          description: "A thorough check for accuracy, layout consistency, and readability.",
        },
        {
          step: 5,
          title: "Academic Distribution",
          description: "We help you get your textbook into the hands of students and institutions.",
        },
      ]}
      testimonial={{
        name: "Dr. Karen Miller",
        text: "The quality of my medical textbook is outstanding. They handled the complex diagrams and tables with incredible precision.",
        rating: 5,
      }}
      ctaText="Publish My Textbook"
    />
  );
}
