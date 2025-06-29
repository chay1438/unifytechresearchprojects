"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
  { href: "https://twitter.com", label: "Twitter", icon: "twitter" },
  { href: "https://github.com", label: "GitHub", icon: "github" },
  { href: "mailto:info@unifytech.com", label: "Email", icon: "mail" },
];

function SocialIcon({ icon, label }: { icon: string; label: string }) {
  const icons: Record<string, JSX.Element> = {
    linkedin: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    twitter: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fuchsia-400"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.15 2.97 4.05 3A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 24 4.59a9.1 9.1 0 0 1-2.6.71z"/></svg>,
    github: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.7.12 2.5.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>,
    mail: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>,
  };
  return <span aria-label={label} className="inline-block align-middle">{icons[icon]}</span>;
}

function AnimatedMail() {
  // Simple animated SVG mail icon
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto mb-4 animate-bounce-slow">
      <rect x="8" y="16" width="48" height="32" rx="6" fill="#18181b" stroke="#38bdf8" strokeWidth="3" />
      <polyline points="8,20 32,40 56,20" fill="none" stroke="#f0abfc" strokeWidth="3" />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate() {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center animated-bg p-6">
      <Card className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-lg shadow-2xl border-0 animate-fade-in-up">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent text-center animate-gradient-x">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatedMail />
          <p className="text-center text-muted-foreground mb-6">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" type="text" placeholder="Your Name" className={`rounded-lg px-4 py-2 bg-white/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition ${errors.name ? 'ring-2 ring-red-400' : ''}`} value={form.name} onChange={handleChange} required aria-invalid={!!errors.name} aria-describedby="name-error" />
            {errors.name && <span id="name-error" className="text-red-400 text-xs">{errors.name}</span>}
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" type="email" placeholder="Your Email" className={`rounded-lg px-4 py-2 bg-white/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${errors.email ? 'ring-2 ring-red-400' : ''}`} value={form.email} onChange={handleChange} required aria-invalid={!!errors.email} aria-describedby="email-error" />
            {errors.email && <span id="email-error" className="text-red-400 text-xs">{errors.email}</span>}
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Your Message" className={`rounded-lg px-4 py-2 bg-white/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none ${errors.message ? 'ring-2 ring-red-400' : ''}`} value={form.message} onChange={handleChange} required aria-invalid={!!errors.message} aria-describedby="message-error" />
            {errors.message && <span id="message-error" className="text-red-400 text-xs">{errors.message}</span>}
            <Button type="submit" className="mt-2 bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 animate-gradient-x">Send Message</Button>
            {submitted && <div className="text-emerald-400 text-center mt-2 animate-fade-in-up">Thank you! Your message has been sent. 🚀</div>}
          </form>
          <div className="mt-8 flex justify-center gap-6">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:scale-125 transition-transform duration-300">
                <SocialIcon icon={s.icon} label={s.label} />
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/" className="text-sky-400 hover:underline">← Back to Home</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 