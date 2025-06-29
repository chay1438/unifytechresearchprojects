"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center animated-bg p-6">
      <Card className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-lg shadow-2xl border-0 animate-fade-in-up">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent text-center animate-gradient-x">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground mb-6">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="rounded-lg px-4 py-2 bg-white/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition" required />
            <input type="email" placeholder="Your Email" className="rounded-lg px-4 py-2 bg-white/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky-400 transition" required />
            <textarea placeholder="Your Message" rows={4} className="rounded-lg px-4 py-2 bg-white/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none" required />
            <Button type="submit" className="mt-2 bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 animate-gradient-x">Send Message</Button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-sky-400 hover:underline">← Back to Home</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 