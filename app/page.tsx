"use client"

import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TransitionPage />
      <div className="flex">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}