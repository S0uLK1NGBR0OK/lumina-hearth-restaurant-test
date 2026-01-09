"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroScrollDemo } from "@/components/ui/demo";
import { ArrowRight, Star, ChefHat, Wine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center tracking-tighter">
            LUMINA & HEARTH
          </div>
          <div className="font-light text-base md:text-2xl dark:text-neutral-200 py-4 max-w-lg text-center">
            Where culinary alchemy meets rustic warmth. <br />
            Casual fine dining in the heart of the city.
          </div>
          <div className="flex gap-4">
            <Link
              href="/menu"
              className="bg-white dark:bg-white rounded-full w-fit text-black px-8 py-3 text-sm font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all"
            >
              View Menu
            </Link>
            <button className="bg-transparent border border-white/20 rounded-full w-fit text-white px-8 py-3 text-sm font-bold hover:bg-white/10 transition-all">
              Book a Table
            </button>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Scroll Animation Section */}
      <section className="relative z-10 bg-black -mt-20 md:-mt-40">
        <HeroScrollDemo />
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/10 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
            <ChefHat className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Masterful Cuisine
            </h3>
            <p className="text-zinc-400">
              Led by Executive Chef Elena Vance, our kitchen sources local
              ingredients to create global flavors.
            </p>
          </div>
          <div className="p-8 border border-white/10 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
            <Wine className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Curated Wines</h3>
            <p className="text-zinc-400">
              An extensive cellar featuring organic and biodynamic wines from the
              world's best vineyards.
            </p>
          </div>
          <div className="p-8 border border-white/10 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
            <Star className="w-10 h-10 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Michelin Guide
            </h3>
            <p className="text-zinc-400">
              Recognized for three consecutive years for outstanding service and
              ambience.
            </p>
          </div>
        </div>
      </section>

      {/* Visual CTA */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
          alt="Chef Plating"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 md:p-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Taste the Extraordinary
            </h2>
            <p className="text-zinc-300 max-w-xl text-lg">
              Every dish tells a story. Join us for an evening of unforgettable
              flavors.
            </p>
          </div>
          <Link
            href="/about"
            className="flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-300 transition-colors"
          >
            Read Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
