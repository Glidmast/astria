import React, { useMemo, useState } from "react";
import ArtworkCard from "../components/ArtworkCard";
import artworksJSON from "../content/artworks.json";

/*
 Gallery page:
 - Grid of artworks
 - Filter by category
*/

export default function Gallery() {
  const artworks = artworksJSON.artworks || [];
  const categories = useMemo(() => {
    const set = new Set(artworks.map((a) => a.category || "Uncategorized"));
    return ["All", ...Array.from(set)];
  }, [artworks]);

  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return artworks;
    return artworks.filter((a) => a.category === active);
  }, [active, artworks]);

  return (
    <section>
      <h1 className="font-serif text-3xl mb-6">Gallery</h1>

      <div className="mb-6 flex items-center space-x-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={
              "text-sm px-3 py-1 rounded-md border " +
              (active === cat ? "bg-slate-900 text-white" : "text-slate-700 bg-white")
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((art) => (
          <ArtworkCard key={art.title} art={art} />
        ))}
      </div>
    </section>
  );
}