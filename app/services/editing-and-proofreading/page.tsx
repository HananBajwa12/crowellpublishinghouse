import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Editing and Proofreading Services | Crowell Publishing House",
  description: "Professional book editing and proofreading to polish your manuscript. From developmental editing to final grammar checks.",
};

export default function EditingProofreadingPage() {
  return (
    <ServicePageLayout
      title="Editing & Proofreading"
      subtitle="Refine Your Voice and Polish Your Prose"
      description="Every great book is the result of great editing. Our team of experienced editors works with you to strengthen your story, refine your style, and ensure your manuscript is error-free and ready for publication."
      iconName="FilePen"
      heroImage="/images/editing-hero.jpg"
      features={[
        {
          title: "Developmental Editing",
          description: "Big-picture feedback on structure, plot, character development, and pacing.",
        },
        {
          title: "Copyediting",
          description: "A deep dive into sentence structure, grammar, style consistency, and flow.",
        },
        {
          title: "Proofreading",
          description: "The final check for typos, spelling errors, and punctuation mistakes.",
        },
        {
          title: "Editorial Assessments",
          description: "A comprehensive report on your manuscript's strengths and areas for improvement.",
        },
        {
          title: "Fact Checking",
          description: "Verification of names, dates, and facts for non-fiction manuscripts.",
        },
        {
          title: "Style Guide Compliance",
          description: "Ensuring your book follows Chicago, APA, or your preferred style guide.",
        },
      ]}
      benefits={[
        "Improve the overall quality of your writing",
        "Eliminate embarrassing errors and typos",
        "Professional feedback from industry experts",
        "Maintain your unique authorial voice",
        "Higher ratings and better reader reviews",
        "Manuscripts ready for submission or publishing",
      ]}
      process={[
        {
          step: 1,
          title: "Manuscript Review",
          description: "We review your work to determine the level of editing required.",
        },
        {
          step: 2,
          title: "Primary Edit",
          description: "The editor performs the requested level of editing on your manuscript.",
        },
        {
          step: 3,
          title: "Author Review",
          description: "You review the edits and suggestions, making final decisions on changes.",
        },
        {
          step: 4,
          title: "Final Proofread",
          description: "A final sweep to catch any remaining minor errors before layout.",
        },
        {
          step: 5,
          title: "Ready for Print",
          description: "Your polished manuscript is now ready for formatting and design.",
        },
      ]}
      testimonial={{
        name: "Robert Hughes",
        text: "My editor was incredible. They helped me find the heart of my story while fixing issues I hadn't even noticed. Highly recommended!",
        rating: 5,
      }}
      ctaText="Edit My Manuscript"
    />
  );
}
