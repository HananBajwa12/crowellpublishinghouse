import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "Contact Us | Crowell Publishing House",
  description: "Contact Crowell Publishing House for a publishing consultation.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 lg:pt-40">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
