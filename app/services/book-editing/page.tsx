import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Book Editing Services | Crowell Publishing House",
  description: "Professional book editing services including developmental editing, copyediting, and proofreading to polish your manuscript to perfection.",
};

export default function BookEditingPage() {
  return (
    <ServicePageLayout
      title="Book Editing Services"
      subtitle="Polish Your Manuscript to Perfection"
      description="Every great book goes through rigorous editing. Our team of professional editors will refine your manuscript, strengthen your narrative, and ensure your writing shines. From developmental editing to final proofreading, we cover it all."
      iconName="FilePen"
      heroImage="/services/book-editing.png"
      features={[
        {
          title: "Developmental Editing",
          description: "Big-picture feedback on structure, plot, character development, pacing, and overall narrative flow.",
        },
        {
          title: "Line Editing",
          description: "Sentence-level refinement focusing on style, tone, word choice, and the rhythm of your prose.",
        },
        {
          title: "Copyediting",
          description: "Thorough review for grammar, punctuation, spelling, consistency, and adherence to style guides.",
        },
        {
          title: "Proofreading",
          description: "Final polish to catch any remaining typos, formatting issues, and minor errors before publication.",
        },
        {
          title: "Manuscript Assessment",
          description: "Comprehensive evaluation with detailed feedback and actionable recommendations for improvement.",
        },
        {
          title: "Query Letter & Synopsis",
          description: "Professional editing of your pitch materials to help you land an agent or publisher.",
        },
      ]}
      benefits={[
        "Editors with 10+ years of publishing experience",
        "Genre-specific expertise across fiction and non-fiction",
        "Chicago Manual of Style and AP Style proficiency",
        "Detailed feedback with track changes and comments",
        "Two rounds of revisions included with every package",
        "Fast turnaround options available",
      ]}
      process={[
        {
          step: 1,
          title: "Submit Your Manuscript",
          description: "Send us your manuscript and let us know your goals, timeline, and any specific concerns.",
        },
        {
          step: 2,
          title: "Free Sample Edit",
          description: "We provide a complimentary sample edit so you can experience our editing style firsthand.",
        },
        {
          step: 3,
          title: "Editor Assignment",
          description: "We match you with an editor who specializes in your genre and understands your vision.",
        },
        {
          step: 4,
          title: "Editing Process",
          description: "Your editor works through your manuscript, providing detailed feedback and suggestions.",
        },
        {
          step: 5,
          title: "Review & Revisions",
          description: "Review the edits, ask questions, and request revisions until your manuscript shines.",
        },
      ]}
      testimonial={{
        name: "Michael Torres",
        text: "The developmental edit transformed my novel completely. The editor identified plot holes I never noticed and helped me create much stronger characters. Worth every penny!",
        rating: 5,
      }}
      ctaText="Get Your Free Sample Edit"
    />
  );
}
