"use client";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />

      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
          <p className="text-neutral-400">Get in touch...</p>
        </div>
      </div>
    </main>
  );
}
