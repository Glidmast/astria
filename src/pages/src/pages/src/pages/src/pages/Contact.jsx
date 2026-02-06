import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    // This is a static UI. Integrate a real endpoint or Netlify Forms if you want server handling.
    console.log("Contact form submitted", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="max-w-2xl">
      <h1 className="font-serif text-3xl mb-6">Contact</h1>
      {!sent ? (
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-700">Name</label>
            <input name="name" value={form.name} onChange={update} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-slate-700">Email</label>
            <input name="email" value={form.email} onChange={update} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-slate-700">Message</label>
            <textarea name="message" value={form.message} onChange={update} className="mt-1 w-full border rounded px-3 py-2" rows="6" />
          </div>
          <div>
            <button type="submit" className="px-5 py-3 bg-slate-900 text-white rounded">Send</button>
          </div>
        </form>
      ) : (
        <div className="p-6 border rounded text-slate-700">
          Thank you — your message has been recorded (demo). We'll respond soon.
        </div>
      )}
    </section>
  );
}
