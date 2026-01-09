import Image from "next/image";

const categories = [
  {
    name: "Starters",
    items: [
      {
        name: "Truffle Arancini",
        price: "$16",
        desc: "Wild mushroom risotto, black truffle aioli, parmesan crisp.",
        image:
          "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2000&auto=format&fit=crop",
      },
      {
        name: "Wagyu Carpaccio",
        price: "$24",
        desc: "A5 Wagyu, capers, shallots, truffle oil, micro greens.",
        image:
          "https://images.unsplash.com/photo-1544025162-d76690b60943?q=80&w=2000&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "Mains",
    items: [
      {
        name: "Pan-Seared Scallops",
        price: "$38",
        desc: "Cauliflower purée, pancetta, brown butter emulsion.",
        image:
          "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=2000&auto=format&fit=crop",
      },
      {
        name: "Herb-Crusted Lamb Rack",
        price: "$45",
        desc: "Fondant potato, seasonal greens, red wine jus.",
        image:
          "https://images.unsplash.com/photo-1544510807-6f6859e21722?q=80&w=2000&auto=format&fit=crop",
      },
      {
        name: "Charcoal Grilled Ribeye",
        price: "$52",
        desc: "20oz bone-in ribeye, chimichurri, roasted garlic.",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Our Menu
        </h1>
        <p className="text-zinc-400">
          Seasonal ingredients. Timeless techniques.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-20">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h2 className="text-2xl font-bold text-amber-500 mb-8 border-b border-white/10 pb-4">
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {cat.items.map((item) => (
                <div key={item.name} className="group">
                  <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="text-lg font-mono text-amber-500">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
