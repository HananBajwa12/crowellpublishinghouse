import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TrustedPlatforms, TrustedPlatformsBridge } from "@/components/trusted-platforms";
import { Services } from "@/components/services";
import { CtaBanner } from "@/components/cta-banner";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { SuccessStories } from "@/components/success-stories";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TrustedPlatforms />
      <TrustedPlatformsBridge />
      <Services />
      <CtaBanner />
      <Process />
      <Testimonials />
      <SuccessStories />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
