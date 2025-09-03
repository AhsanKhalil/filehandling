"use client";
import { useEffect, useState } from "react";
import { getTranslations } from "./utils/getTranslations";
import { useLanguage } from "./context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    getTranslations(language).then((data) => setTranslations(data));
  }, [language]);

  if (!translations.aboutContent) return null;

  return (
    <main className="p-6 flex justify-center">
      <div
        className={`max-w-3xl bg-white shadow-lg rounded-2xl p-8 ${
          language === "ar" || language === "ur" ? "text-right" : "text-left"
        }`}
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          {translations.aboutTitle}
        </h1>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          {translations.aboutContent.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
