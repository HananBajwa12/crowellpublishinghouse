import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Testimonials } from "@/components/testimonials";

export const metadata = {
  title: "Testimonials | Crowell Publishing House",
  description: "Read what authors say about working with Crowell Publishing House.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 lg:pt-40">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
