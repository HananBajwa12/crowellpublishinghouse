import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata = {
  title: "Audiobook Publishing Services | Crowell Publishing House",
  description: "Professional audiobook production and distribution. Professional narrators and studio-quality recording.",
};

export default function AudiobookPublishingPage() {
  return (
    <ServicePageLayout
      title="Audiobook Publishing"
      subtitle="Bring Your Story to Life with Professional Narration"
      description="The audiobook market is booming. We provide full-service audiobook production, from narrator casting and studio recording to final editing and global distribution on Audible, iTunes, and more."
      iconName="Mic"
      heroImage="/images/audiobook-hero.jpg"
      features={[
        {
          title: "Professional Narrator Casting",
          description: "Access to a diverse roster of professional voice actors to find the perfect voice for your book.",
        },
        {
          title: "Studio-Quality Recording",
          description: "High-end recording and engineering to ensure crystal-clear audio quality.",
        },
        {
          title: "Expert Audio Editing",
          description: "Detailed editing to remove breaths, clicks, and pauses for a professional flow.",
        },
        {
          title: "Global Distribution",
          description: "Your audiobook listed on Audible, Amazon, Apple Books, and Spotify.",
        },
        {
          title: "ACX & Findaway Support",
          description: "Full management of the technical requirements for major audiobook platforms.",
        },
        {
          title: "Custom Cover Art",
          description: "Optimization of your book cover for the square audiobook format.",
        },
      ]}
      benefits={[
        "Reach the fastest-growing segment of the book market",
        "Higher royalty potential from audio sales",
        "Professional production that builds author brand",
        "Hands-free management of the recording process",
        "Accessible options for vision-impaired readers",
        "Lifetime technical support for your audio files",
      ]}
      process={[
        {
          step: 1,
          title: "Audition & Casting",
          description: "We provide auditions from multiple narrators for you to choose the best fit.",
        },
        {
          step: 2,
          title: "Production Recording",
          description: "The narrator records your book in a professional studio environment.",
        },
        {
          step: 3,
          title: "Editing & Mastering",
          description: "Our engineers edit and master the audio to meet platform standards.",
        },
        {
          step: 4,
          title: "Review & Approval",
          description: "You listen to the final production and approve it for distribution.",
        },
        {
          step: 5,
          title: "Global Launch",
          description: "We upload and distribute your audiobook to all major retail platforms.",
        },
      ]}
      testimonial={{
        name: "Arthur Penhaligon",
        text: "The narrator they found for my epic fantasy was perfect! The production quality is top-notch, and sales have been incredible.",
        rating: 5,
      }}
      ctaText="Produce My Audiobook"
    />
  );
}
