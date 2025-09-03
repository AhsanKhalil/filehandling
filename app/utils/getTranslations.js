// app/utils/getTranslations.js
export async function getTranslations(language) {
  const res = await fetch(`/locales/${language}.json`);
  return res.json();
}
