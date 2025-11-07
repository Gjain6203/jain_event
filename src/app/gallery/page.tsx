"use client";

import { useState } from "react";
import Image from "next/image";

interface Media {
  type :"image" | "video";
  src: string;
  alt: string;
}

const weddingImages: Media[] = [
  {  type: "image",src: "/image/wedding1.jpg", alt: "Wedding Photo " },
  {  type: "image",src: "/image/wedding2.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding3.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding4.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding5.jpg", alt: "Wedding Photo " },
  {  type: "image",src: "/image/wedding6.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding7.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding8.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding9.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding10.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding11.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding12.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding13.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding14.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding15.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding16.jpg", alt: "Wedding Photo " },
  { type: "image", src: "/image/wedding18.jpg", alt: "Wedding Photo " },
  {  type: "image",src: "/image/wedding19.jpg", alt: "Wedding Photo " },
  {  type: "image",src: "/image/wedding20.jpg", alt: "Wedding Photo " },
  {  type: "image",src: "/image/wedding21.jpg", alt: "Wedding Photo " },
  {  type: "image",src: "/image/wedding22.jpg", alt: "Wedding Photo " },
   {  type: "image",src: "/image/wedding23.JPG", alt: "Wedding Photo " },
    {  type: "image",src: "/image/wedding24.jpg", alt: "Wedding Photo " },
    {  type: "video",src: "/image/wedding reels video1.mp4", alt: "Wedding video " },
     {  type: "video",src: "/image/wedding reels video2.mp4", alt: "Wedding video " },
];

const birthdayImages: Media[] = [
  { type: "image", src: "/image/birgday1.jpg", alt: "Birthday Photo " },
  { type: "image", src: "/image/birthday2.jpg", alt: "Birthday Photo" },
  { type: "image", src: "/image/bithday3.jpg", alt: "Birthday Photo" },
  {  type: "image",src: "/image/bithday4.jpg", alt: "Birthday Photo" },
  {  type: "image",src: "/image/birthday4.jpg", alt: "Birthday Photo" },
  {  type: "image",src: "/image/babyshower1.jpg", alt: "Baby Shower" },
  {  type: "image",src: "/image/babyshower2.jpg", alt: "Baby Shower" },
];

export default function GalleryPage() {
  const [category, setCategory] = useState<"wedding" | "birthday" | null>(null);

  const media =
    category === "wedding"
      ? weddingImages
      : category === "birthday"
      ? birthdayImages
      : [];

  return (
    <main className="max-w-6xl mx-auto p-6 mb-25 lg:mb-0 md:mb-0">
      <h1 className="text-3xl font-bold mb-8 text-center mt-5 ">Gallery</h1>

      {!category && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <div
            onClick={() => setCategory("wedding")}
            className="w-full sm:w-80 h-48 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
            style={{ backgroundImage: "url('/image/wedding1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-xl font-semibold text-white">
                Wedding Photos & Videos
              </span>
            </div>
          </div>

          <div
            onClick={() => setCategory("birthday")}
            className="w-full sm:w-80 h-48 mb-20 lg:mb-0  md:mb-0 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform relative overflow-hidden"
            style={{ backgroundImage: "url('/image/birthday2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-xl font-semibold text-white">
                Birthday Photos & Videos
              </span>
            </div>
          </div>
        </div>
      )}

      {category && (
        <div>
          <button
            onClick={() => setCategory(null)}
            className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ← Back to Categories
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mb-28">
            {media.map((item, idx) => (
              <div
                key={idx}
                className="w-full sm:w-80 h-96 relative rounded-lg overflow-hidden shadow-lg"
              >
               {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt || "Media"}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
