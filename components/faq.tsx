"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does The Crowell Publishing House offer?",
    answer: "We offer a comprehensive range of publishing services including ghostwriting, editorial development, professional book editing, book cover design, interior formatting, eBook and audiobook production, global distribution through platforms like Amazon, Apple Books, and IngramSpark, as well as marketing and author branding services.",
  },
  {
    question: "How long does the publishing process take?",
    answer: "The timeline varies depending on the services you need. Editorial work typically takes 2-4 months for a full manuscript. Design and formatting usually take 2-4 weeks. The entire process from manuscript to published book typically ranges from 3-6 months, ensuring quality at every step.",
  },
  {
    question: "Do I retain the rights to my book?",
    answer: "Absolutely! Unlike traditional publishing, you retain 100% of your creative rights and receive all royalties from your book sales. We believe authors should maintain complete ownership of their work while benefiting from professional publishing support.",
  },
  {
    question: "What platforms will my book be available on?",
    answer: "We distribute your book globally through major platforms including Amazon, Barnes & Noble, Apple Books, Kobo, IngramSpark, and many more. This includes both online retailers and physical bookstore distribution, ensuring maximum reach for your book.",
  },
  {
    question: "How much does it cost to publish with The Crowell Publishing House?",
    answer: "Our pricing varies based on the services you need. We offer customized publishing packages tailored to your specific requirements and budget. Contact us for a free consultation and personalized quote based on your manuscript and goals.",
  },
  {
    question: "Do you offer audiobook production?",
    answer: "Yes! We provide professional audiobook production services, including narrator selection, studio recording, editing, and distribution to major audiobook platforms like Audible, Apple Books, and more.",
  },
  {
    question: "Can you help with marketing my book?",
    answer: "Absolutely! Our marketing services include launch campaigns, social media management, SEO optimization, author website development, press releases, and ongoing promotional strategies to help your book reach its target audience.",
  },
  {
    question: "What genres do you work with?",
    answer: "We work with authors across all genres including fiction (literary, mystery, romance, sci-fi, fantasy), non-fiction (memoirs, business, self-help), children's books, poetry, and more. Our diverse team has experience across the literary spectrum.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything You Wanted to Know About Us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
