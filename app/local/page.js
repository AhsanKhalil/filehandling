"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [gallery, setGallery] = useState([]);
  const [gallerys3, setGallerys3] = useState([]);
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("/api/images/local")
      .then((r) => r.json())
      .then((data) => {
        setGallery(data);
      });
  }, [load]);

  useEffect(() => {
    fetch("/api/images/s3")
      .then((r) => r.json())
      .then((data) => {
        setGallerys3(data.items);
      });
  }, []);

  function handleUploadLocal(e) {
    e.preventDefault();
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    fetch("/api/images/local", { method: "POST", body: fd });
    setLoad(!load);
  }

  function handleUploadS3(e) {
    e.preventDefault();
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    fetch("/api/images/s3", { method: "POST", body: fd });
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      {/* Upload Form */}
      <form className="flex flex-col md:flex-row gap-4 items-center justify-center mb-10">
        <input
          className="border border-gray-300 p-2 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
          onClick={handleUploadLocal}
        >
          Upload
        </button>
      </form>

      {/* Local Gallery */}
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">
        Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {gallery.length > 0 ? (
          gallery.map((src, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={src}
                alt={`img${i}`}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
                priority
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Loading...</p>
        )}
      </div>
    </div>
  );
}
