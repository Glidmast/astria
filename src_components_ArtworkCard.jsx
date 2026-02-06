import React from "react";

export default function ArtworkCard({ art }) {
  return (
    <article className="bg-white shadow-sm border rounded-md overflow-hidden">
      <div className="w-full h-56 bg-gray-100">
        <img
          src={art.image}
          alt={art.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg">{art.title}</h3>
        <p className="text-sm text-slate-500 mt-1">{art.artistName} · {art.year}</p>
        <p className="text-sm text-slate-600 mt-3">{art.description}</p>
      </div>
    </article>
  );
}