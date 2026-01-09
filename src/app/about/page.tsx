import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop"
          alt="Restaurant Ambience"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Visit Us
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Founded in 2024, Lumina & Hearth was born from a desire to bring
            people back to the table. We believe that dining is not just about
            sustenance, but about connection.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Our interior, designed by award-winning architects, balances the raw
            beauty of industrial elements with the warmth of natural wood and
            soft lighting, creating an atmosphere that is both impressive and
            intimate.
          </p>
        </div>

        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-8">
            Contact & Hours
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-zinc-400">123 Culinary Avenue</p>
                <p className="text-zinc-400">Metropolis, NY 10012</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <p className="text-white font-medium">Opening Hours</p>
                <p className="text-zinc-400">Tue - Thu: 5pm - 10pm</p>
                <p className="text-zinc-400">Fri - Sat: 5pm - 11pm</p>
                <p className="text-zinc-400">Sun: 4pm - 9pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <p className="text-white font-medium">Reservations</p>
                <p className="text-zinc-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-amber-500 mt-1" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-zinc-400">reservations@luminahearth.com</p>
              </div>
            </div>
          </div>

          <button className="w-full mt-8 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
}
