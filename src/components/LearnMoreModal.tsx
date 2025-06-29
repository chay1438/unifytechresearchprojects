"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function LearnMoreModal({ open, onClose, title, icon, children }: {
  open: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in-up">
      <div className="absolute inset-0" onClick={onClose} aria-label="Close modal" tabIndex={-1} />
      <Card className="relative w-full max-w-md mx-auto bg-white/10 backdrop-blur-lg shadow-2xl border-0 animate-fade-in-up scale-100">
        <Button size="icon" variant="ghost" className="absolute top-2 right-2 text-xl text-muted-foreground hover:text-fuchsia-400" onClick={onClose} aria-label="Close">×</Button>
        <CardHeader className="flex flex-col items-center gap-2">
          {icon && <div className="text-4xl mb-1">{icon}</div>}
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent text-center animate-gradient-x">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-base text-foreground/90 flex flex-col gap-2">
          {children}
        </CardContent>
      </Card>
    </div>
  );
} 