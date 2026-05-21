import React from "react";
import { motion } from "framer-motion";
import { Wifi, Car, PawPrint, Users, MapPin, KeyRound, Utensils, ShowerHead, BedDouble, Star } from "lucide-react";

export default function HemsbyCaravanRental() {
  const features = [
    { icon: Wifi, title: "Wi-Fi Included", text: "Stay connected during your seaside break." },
    { icon: Car, title: "Parking Available", text: "Convenient parking for guests on site." },
    { icon: PawPrint, title: "Pet Friendly", text: "Bring your four-legged friend along." },
    { icon: Users, title: "Sleeps Up To 6", text: "Ideal for families, couples, and small groups." },
    { icon: Utensils, title: "Full Kitchen", text: "Everything you need for simple meals and snacks." },
    { icon: ShowerHead, title: "Shower & En-Suite Toilet", text: "Comfortable facilities, including en-suite access from the main room." },
  ];

  const highlights = [
    "Located at Seafield Caravan Park on Newport Road, Hemsby",
    "Close to the beach, amusements, cafés, and family attractions",
    "Comfortable lounge area with under-sofa pull-out bed",
    "Lockbox check-in details provided on the morning of your stay",
  ];

  const photos = [
    {
      title: "Main Living Area",
      src: "/images/lounge.jpg",
      alt: "Main living area inside the caravan",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Kitchen",
      src: "/images/kitchen.jpg",
      alt: "Kitchen inside the caravan",
    },
{
      title: "Dining",
      src: "/images/dining.jpg",
      alt: "Kitchen inside the caravan",
    },
    {
      title: "Bedroom",
      src: "/images/bedroom.jpg",
      alt: "Bedroom inside the caravan",
    },
    {
      title: "Shower Room",
      src: "/images/shower.jpg",
      alt: "Shower room inside the caravan",
    },
    {
      title: "Outdoor Area",
      src: "/images/outside.jpg",
      alt: "Outdoor area around the caravan",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-700 to-cyan-600 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              Hemsby seaside caravan getaway
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Relax by the coast in a cosy, pet-friendly caravan
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-sky-50">
              A welcoming caravan at Seafield Caravan Park, Hemsby — perfect for beach days, family breaks, and peaceful Norfolk getaways.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="rounded-2xl bg-white px-6 py-3 text-center font-semibold text-sky-800 shadow-lg transition hover:bg-sky-50">
                Enquire About Dates
              </a>
              <a href="#gallery" className="rounded-2xl border border-white/50 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10">
                View Photos
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] bg-white/15 p-4 shadow-2xl backdrop-blur">
            <img
              src="/images/outside.svg"
              alt="Caravan preview"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-inner"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <BedDouble className="mb-4 h-8 w-8 text-sky-700" />
            <h3 className="text-xl font-bold">Comfortable Stay</h3>
            <p className="mt-3 text-slate-600">A practical, cosy base for up to 6 guests, with space to relax after a day at the coast.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <Star className="mb-4 h-8 w-8 text-sky-700" />
            <h3 className="text-xl font-bold">Family Friendly</h3>
            <p className="mt-3 text-slate-600">Close to Hemsby’s beach, arcades, food spots, and classic seaside attractions.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <KeyRound className="mb-4 h-8 w-8 text-sky-700" />
            <h3 className="text-xl font-bold">Easy Check-In</h3>
            <p className="mt-3 text-slate-600">A lockbox is available, with key details sent on the morning of your arrival.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Photo gallery</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Take a look inside your seaside stay</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Replace the placeholder files in <strong>public/images</strong> with your real caravan photos when you have them.
              </p>
            </div>
            <a href="#booking" className="rounded-2xl bg-sky-700 px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-sky-800">
              Check Availability
            </a>
          </div>

          <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4">
            {photos.map((photo) => (
              <div key={photo.title} className={`group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200 ${photo.className || ""}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-5 text-white">
                  <h3 className="font-bold">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-sky-50 p-5 text-sm text-slate-700 ring-1 ring-sky-100">
            <strong>Photo replacement tip:</strong> keep the same filenames or update the image paths in <code>src/App.jsx</code>. Recommended names: <code>lounge.jpg</code>, <code>kitchen.jpg</code>, <code>bedroom.jpg</code>, <code>shower.jpg</code>, and <code>outside.jpg</code>.
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">What’s included</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Everything you need for a simple seaside escape</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <Icon className="h-8 w-8 text-sky-700" />
                  <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-slate-600">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Location</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Stay close to the best of Hemsby</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The caravan is based at Seafield Caravan Park on Newport Road, Hemsby. Before arrival, guests receive a map with the exact location, making it easy to find the caravan once on site.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] bg-sky-100 p-6 shadow-sm">
          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <MapPin className="h-10 w-10 text-sky-700" />
            <h3 className="mt-4 text-2xl font-bold">Seafield Caravan Park</h3>
            <p className="mt-2 text-slate-600">Newport Road, Hemsby, Norfolk</p>
            <div className="mt-6 rounded-2xl bg-slate-100 p-5 text-slate-600">
              Replace this panel with an embedded Google Map or an image of the caravan/location.
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">Book your break</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Ready for a Norfolk seaside stay?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Get in touch to check availability, pricing, and any questions about your stay.
            </p>
          </div>
          <form className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-semibold">
                Name
                <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input type="email" className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Message
                <textarea className="min-h-28 rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-600" placeholder="Tell us your preferred dates and number of guests" />
              </label>
              <button type="button" className="rounded-2xl bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800">
                Send Enquiry
              </button>
              <p className="text-xs text-slate-500">
                This is a front-end form placeholder. Connect it to Airbnb, email, or a booking system before publishing.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Hemsby Seaside Caravan. All rights reserved.</p>
      </footer>
    </main>
  );
}
