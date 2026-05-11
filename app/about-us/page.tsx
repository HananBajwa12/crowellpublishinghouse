import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "About Us | Crowell Publishing House",
  description: "Learn about Crowell Publishing House and our author-focused publishing legacy.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 lg:pt-40">
        <About />
      </div>
      <Footer />
    </main>
  );
}
