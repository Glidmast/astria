import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <div className="text-sm font-serif">Astria</div>
          <div className="text-xs text-slate-500 mt-1">© {new Date().getFullYear()} Astria Gallery</div>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-slate-500">
          Designed for quiet contemplation. Contact at <a href="/contact" className="underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}