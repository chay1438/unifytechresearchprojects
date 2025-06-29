"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UnifyTechLogo from "@/components/UnifyTechLogo";
import Unify3D from "@/components/Unify3D";
import ZigZagLines from "@/components/ZigZagLines";
import Link from "next/link";

export default function Home() {
  return (
    <div className="animated-bg min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <ZigZagLines />
      <header className="flex flex-col items-center gap-4 mt-8 mb-4">
        <UnifyTechLogo className="mb-2" size={96} />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] text-center animate-gradient-x">
          UnifyTech Research Projects
        </h1>
        <p className="text-lg sm:text-xl text-center max-w-2xl bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-gradient-x">
          Showcasing cutting-edge <span className="font-semibold text-accent">AI technologies</span>, research, and innovation. Empowering the future with modern, graceful design.
        </p>
      </header>
      <Unify3D />
      <main className="flex flex-col gap-8 w-full max-w-4xl">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="relative group overflow-hidden border-0 bg-white/10 backdrop-blur-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-fuchsia-400/40 before:to-sky-400/20 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 animate-fade-in-up">
            <div className="absolute top-4 right-4 text-fuchsia-400 text-3xl opacity-80 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-gradient-x">AI Research</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-gradient-x">Explore our latest breakthroughs in machine learning, deep learning, and generative AI.</p>
              <div className="w-full h-2 bg-fuchsia-200/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-400 animate-progress-bar" style={{width: '85%'}}></div>
              </div>
              <Button className="mt-2 bg-fuchsia-500/80 hover:bg-fuchsia-600/90 text-white shadow-md transition-transform duration-300 hover:scale-105" size="sm">Learn More</Button>
            </CardContent>
          </Card>
          <Card className="relative group overflow-hidden border-0 bg-white/10 backdrop-blur-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-sky-400/40 before:to-fuchsia-400/20 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 animate-fade-in-up [animation-delay:0.1s]">
            <div className="absolute top-4 right-4 text-sky-400 text-3xl opacity-80 group-hover:scale-110 transition-transform duration-300">🛠️</div>
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-sky-600 via-fuchsia-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-gradient-x">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <ul className="list-disc pl-4 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-gradient-x">
                <li>Large Language Models (LLMs)</li>
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
                <li>Edge AI & Robotics</li>
              </ul>
              <div className="w-full h-2 bg-sky-200/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 animate-progress-bar" style={{width: '70%'}}></div>
              </div>
              <Button className="mt-2 bg-sky-500/80 hover:bg-sky-600/90 text-white shadow-md transition-transform duration-300 hover:scale-105" size="sm">Learn More</Button>
            </CardContent>
          </Card>
          <Card className="relative group overflow-hidden border-0 bg-white/10 backdrop-blur-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-400/40 before:to-fuchsia-400/20 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 animate-fade-in-up [animation-delay:0.2s]">
            <div className="absolute top-4 right-4 text-emerald-400 text-3xl opacity-80 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-emerald-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-gradient-x">Innovation</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="bg-gradient-to-r from-emerald-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-gradient-x">From research to real-world impact, we drive innovation in AI-powered solutions and products.</p>
              <div className="w-full h-2 bg-emerald-200/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 via-fuchsia-400 to-sky-400 animate-progress-bar" style={{width: '95%'}}></div>
              </div>
              <Button className="mt-2 bg-emerald-500/80 hover:bg-emerald-600/90 text-white shadow-md transition-transform duration-300 hover:scale-105" size="sm">Learn More</Button>
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col items-center gap-4 mt-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-gradient-x">Ready to collaborate or learn more?</h2>
          <Button className="px-8 py-6 text-lg font-semibold shadow-xl bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-400 text-white hover:scale-105 transition-transform duration-300 animate-gradient-x" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
      <footer className="mt-16 mb-4 text-center text-sm bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-gradient-x">
        &copy; {new Date().getFullYear()} UnifyTech Research Projects. All rights reserved.
      </footer>
    </div>
  );
}
