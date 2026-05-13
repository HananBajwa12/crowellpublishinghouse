import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Process } from "@/components/process";

export const metadata = {
  title: "Our Process | Crowell Publishing House",
  description: "See how Crowell Publishing House guides authors from manuscript to publication.",
};

export default function OurProcessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 lg:pt-40">
        <Process />
      </div>
      <Footer />
    </main>
  );
}
