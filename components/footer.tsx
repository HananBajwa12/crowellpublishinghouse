"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { label: "Ebook Publishing", href: "/services/ebook-publishing" },
    { label: "Book Marketing", href: "/services/book-marketing" },
    { label: "Book Cover Design", href: "/services/book-cover-design" },
    { label: "Book Illustration", href: "/services/book-illustration" },
    { label: "Editing & Proofreading", href: "/services/editing-and-proofreading" },
    { label: "Formatting Service", href: "/services/book-formatting-service" },
    { label: "Art Book Publishing", href: "/services/art-book-publishing" },
    { label: "Business Book Publishing", href: "/services/business-book-publishing" },
    { label: "Photo Book Publishing", href: "/services/photo-book-publishing" },
    { label: "Audiobook Publishing", href: "/services/audiobook-publishing" },
    { label: "Poetry Publishing", href: "/services/poetry-publishing" },
    { label: "Kindle Direct Publishing", href: "/services/kindle-direct-publishing" },
    { label: "Textbook Publishing", href: "/services/textbook-publishing" },
    { label: "Book Printing", href: "/services/book-printing" },
    { label: "Layout and Design", href: "/services/book-layout-and-design" },
    { label: "Children's Publishing", href: "/services/childrens-book-publishing" },
    { label: "Author Branding", href: "/services/author-branding" },
    { label: "Fiction Publishers", href: "/services/fiction-book-publishers" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "How It Works", href: "/our-process" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact-us" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/people/Crowell-Publishing-House/61589031205632/?mibextid=wwXIfr&rdid=cUzlUGyfMIy65Ra0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Cq8EeD1aB%2F%3Fmibextid%3DwwXIfr", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/crowellpublishing?igsh=ZGo0bGEyaWFnNnRv", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-background rounded-xl p-2">
                <Image
                  src="/logo.png"
                  alt="Crowell Publishing House"
                  width={50}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <div>
                <span className="text-xl font-bold font-serif block">Crowell</span>
                <span className="text-xs text-background/60 tracking-wider">Publishing House</span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Trusted full-service book publishing in the USA. We help authors
              transform their ideas into professionally produced, market-ready books.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href === "#" ? undefined : "_blank"}
                  rel={social.href === "#" ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17188781604"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  (718) 878-1604
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@crowellpublishinghouse.com"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  info@crowellpublishinghouse.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>New York, NY<br />United States</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Crowell Publishing House. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
