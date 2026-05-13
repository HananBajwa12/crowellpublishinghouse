import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Process } from "@/components/process";
import Image from "next/image";

export const metadata = {
  title: "Our Process | Crowell Publishing House",
  description: "See how Crowell Publishing House guides authors from manuscript to publication.",
};

export default function OurProcessPage() {
  return (
    <main className="min-h-screen pt-32 lg:pt-40 bg-background">
      <Header />
      
      {/* Heritage Header Section */}
      <section className="pb-20 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                Our Heritage Since 1878
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground leading-tight">
                A Legacy of <span className="text-primary">Publishing Excellence</span>
              </h1>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1878, Crowell Publishing House emerged as a significant force in American publishing, contributing to the advancement of literature, education, journalism, and public discourse during a transformative period in publishing history.
                </p>
                <p>
                  In 2014, Crowell Publishing House was re-established with a renewed vision focused on the modern self-publishing industry. While honoring its historical legacy, the company adapted to the changing needs of contemporary authors by offering comprehensive publishing solutions that provide writers with creative freedom and professional support.
                </p>
              </div>
            </div>

            {/* Historical Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/about/magazine.jpg"
                    alt="Historic Magazine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative flex-grow rounded-2xl overflow-hidden shadow-xl bg-muted min-h-[150px]">
                  <Image
                    src="/about/building.jpg"
                    alt="Historic Building"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Process Section */}
      <div className="bg-muted/30">
        <Process />
      </div>

      <Footer />
    </main>
  );
}
