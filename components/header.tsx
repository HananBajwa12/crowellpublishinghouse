"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { href: "/services/ebook-publishing", label: "Ebook Publishing" },
  { href: "/services/book-marketing", label: "Book Marketing" },
  { href: "/services/book-cover-design", label: "Book Cover Design" },
  { href: "/services/book-illustration", label: "Book Illustration" },
  { href: "/services/editing-and-proofreading", label: "Editing And Proofreading" },
  { href: "/services/book-formatting-service", label: "Book Formatting Service" },
  { href: "/services/art-book-publishing", label: "Art Book Publishing" },
  { href: "/services/business-book-publishing", label: "Business Book Publishing" },
  { href: "/services/photo-book-publishing", label: "Photo Book Publishing" },
  { href: "/services/audiobook-publishing", label: "Audiobook Publishing" },
  { href: "/services/poetry-publishing", label: "Poetry Publishing" },
  { href: "/services/kindle-direct-publishing", label: "Kindle Direct Publishing" },
  { href: "/services/textbook-publishing", label: "Textbook Publishing" },
  { href: "/services/book-printing", label: "Book Printing" },
  { href: "/services/book-layout-and-design", label: "Book Layout and Design" },
  { href: "/services/childrens-book-publishing", label: "Children's Book Publishing" },
  { href: "/services/author-branding", label: "Author Branding" },
  { href: "/services/fiction-book-publishers", label: "Fiction Book Publishers" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About us" },
  { href: "/#process", label: "Our Process" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact us" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-white text-foreground py-3 border-b border-border relative z-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Crowell Publishing House"
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
            <div className="hidden lg:block border-l border-border pl-6 ml-2">
              <p className="text-sm font-medium max-w-[280px] leading-snug text-muted-foreground italic">
                The Most Trusted Publishing Partners Of New And Seasoned Authors In USA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="tel:+18889080775" className="flex flex-col items-end group">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Call Us 24/7</span>
              <div className="flex items-center gap-2 text-primary font-bold text-base group-hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                +1 (444)-132-1234
              </div>
            </a>
            <a href="mailto:info@crowellpublishing.com" className="hidden sm:flex flex-col items-end group border-l border-border pl-8">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Email Us</span>
              <div className="flex items-center gap-2 text-primary font-bold text-base group-hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                info@crowellpublishing.com
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-primary text-primary-foreground shadow-lg relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-14 relative">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity outline-none">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[90vw] max-w-[1000px] p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.href} asChild className="focus:bg-primary/5 focus:text-primary transition-colors cursor-pointer">
                        <Link href={service.href} className="w-full h-full py-2 text-sm font-semibold">
                          {service.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}

              {/* Pricing placeholder if needed, or just follow the image */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity outline-none">
                  Pricing
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem>Standard Package</DropdownMenuItem>
                  <DropdownMenuItem>Premium Package</DropdownMenuItem>
                  <DropdownMenuItem>Custom Quote</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden absolute right-0 flex items-center h-full">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary-foreground">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-background">
                  <div className="flex items-center gap-3 mb-8">
                    <Image
                      src="/logo.png"
                      alt="Crowell Publishing House"
                      width={50}
                      height={50}
                      className="h-12 w-auto"
                    />
                    <div>
                      <span className="font-bold text-foreground font-serif block">Crowell</span>
                      <span className="text-xs text-muted-foreground">Publishing House</span>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navLinks.slice(0, 3).map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}

                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-lg font-medium text-foreground py-2"
                      >
                        Services
                        <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 space-y-2 mb-2 max-h-[300px] overflow-y-auto">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-muted-foreground hover:text-primary transition-colors py-1"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {navLinks.slice(3).map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
