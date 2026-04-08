import React from "react";
import { Heart, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, mailtoHref } from "@/constants/contact";

const SocialLink = ({ href, image, alt }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 rounded-full bg-slate-900 hover:bg-slate-800 transition-all duration-300 shadow-md"
    aria-label={alt}
  >
    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-blue-500/20 blur-lg" />
    <div className="relative w-5 h-5 z-10">
      <Image src={image} alt={alt} fill className="object-contain brightness-0 invert group-hover:scale-110 transition-transform" />
    </div>
  </Link>
);

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/Mullign", image: "/Github.svg", alt: "GitHub" },
    { href: "https://www.linkedin.com/in/john-russell-61a530220", image: "/LinkedIn.svg", alt: "LinkedIn" },
    { href: "https://www.instagram.com/mull1gan", image: "/Instagram.svg", alt: "Instagram" },
    { href: "https://x.com/mull1ganR", image: "/Twitter.svg", alt: "X" },
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-10">
          <Link
            href={mailtoHref}
            className="inline-flex items-center justify-center gap-2 text-lg font-semibold text-blue-700 hover:text-blue-900 transition-colors"
          >
            <Mail className="w-5 h-5 shrink-0" aria-hidden />
            {CONTACT_EMAIL}
          </Link>
          <p className="text-sm text-slate-500 mt-2">
            <Link href="/resume.pdf" className="font-medium text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Download resume (PDF)
            </Link>
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {socialLinks.map((link) => (
            <SocialLink key={link.alt} {...link} />
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />

        <div className="text-center space-y-3 text-sm text-slate-600">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>Built with</span>
            <Heart size={14} className="text-red-500" fill="currentColor" aria-hidden />
            <span>by</span>
            <Link href="https://github.com/Mullign" target="_blank" className="text-blue-600 hover:underline font-medium">
              John Russell
            </Link>
            <span className="text-slate-400">·</span>
            <Link href="https://nextjs.org" target="_blank" className="text-blue-600 hover:underline">
              Next.js
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
