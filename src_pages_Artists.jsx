import React from "react";
import artistsJSON from "../content/artists.json";

export default function Artists() {
  const artists = artistsJSON.artists || [];

  return (
    <section>
      <h1 className="font-serif text-3xl mb-6">Artists</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {artists.map((a) => (
          <div key={a.name} className="p-6 border rounded-md flex flex-col items-start">
            <div className="w-full h-48 bg-gray-100 overflow-hidden rounded">
              <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-lg mt-4">{a.name}</h3>
            <div className="text-sm text-slate-500">{a.country}</div>
            <blockquote className="mt-3 text-sm text-slate-600 italic">"{a.quote}"</blockquote>
            <p className="text-sm text-slate-700 mt-3">{a.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}