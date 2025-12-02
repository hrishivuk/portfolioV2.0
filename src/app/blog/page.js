"use client";
import Navbar from "../components/navbar";

export default function Blog() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />

      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-neutral-400">Articles coming soon...</p>
        </div>
      </div>
    </main>
  );
}
