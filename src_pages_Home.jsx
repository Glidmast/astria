import React from "react";
import { Link } from "react-router-dom";
import artworks from "../content/artworks.json";

export default function Home() {
  const featured = (artworks.artworks || []).slice(0, 3);

  return (
    <section className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl font-light">Astria</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-prose">
            Astria is a curated gallery for contemplative work — minimal presentation and maximal presence.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link to="/gallery" className="px-5 py-3 border rounded-md text-sm bg-slate-900 text-white">View Gallery</Link>
            <Link to="/artists" className="px-5 py-3 border rounded-md text-sm text-slate-700">Meet Artists</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featured.map((art) => (
            <div key={art.title} className="rounded overflow-hidden shadow-sm">
              <img src={art.image} alt={art.title} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl mb-6">Featured Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((art) => (
            <div key={art.title} className="p-4 border rounded">
              <img src={art.image} alt={art.title} className="w-full h-48 object-cover mb-3" />
              <div className="text-sm text-slate-600">{art.title}</div>
              <div className="text-xs text-slate-500">{art.artistName} · {art.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}