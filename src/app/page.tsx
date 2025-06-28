import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted p-6">
      <header className="flex flex-col items-center gap-4 mt-8 mb-4">
        {/* UnifyTech Logo Placeholder */}
        <Avatar className="w-24 h-24 shadow-lg border-4 border-primary">
          <AvatarFallback className="text-3xl font-bold">UT</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary drop-shadow-lg text-center">
          UnifyTech Research Projects
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground text-center max-w-2xl">
          Showcasing cutting-edge <span className="font-semibold text-accent">AI technologies</span>, research, and innovation. Empowering the future with modern, graceful design.
        </p>
      </header>
      <main className="flex flex-col gap-8 w-full max-w-4xl">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-xl border-primary/30">
            <CardHeader>
              <CardTitle>AI Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Explore our latest breakthroughs in machine learning, deep learning, and generative AI.</p>
            </CardContent>
          </Card>
          <Card className="shadow-xl border-primary/30">
            <CardHeader>
              <CardTitle>Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 text-muted-foreground">
                <li>Large Language Models (LLMs)</li>
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
                <li>Edge AI & Robotics</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-xl border-primary/30">
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">From research to real-world impact, we drive innovation in AI-powered solutions and products.</p>
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col items-center gap-4 mt-8">
          <h2 className="text-2xl font-bold text-primary">Ready to collaborate or learn more?</h2>
          <Button className="px-8 py-6 text-lg font-semibold shadow-lg" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </section>
      </main>
      <footer className="mt-16 mb-4 text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} UnifyTech Research Projects. All rights reserved.
      </footer>
    </div>
  );
}
