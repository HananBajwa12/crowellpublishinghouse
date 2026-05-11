import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "FAQ | Crowell Publishing House",
  description: "Answers to common questions about Crowell Publishing House services.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 lg:pt-40">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
