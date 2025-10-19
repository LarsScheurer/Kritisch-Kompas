// src/app/page.tsx
"use client"; // Belangrijk: dit maakt het een interactief component

import { useRouter } from 'next/navigation'; // De nieuwe manier van navigeren

export default function HomePage() {
  const router = useRouter(); // Haal de router op

  return (
    <div className="text-center bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-gray-900">Welkom bij het Kritisch Kompas</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
        Een publiek platform voor het analyseren van politieke toespraken en debatten. Ons doel is om met behulp van AI en de kracht van de community de redeneerstijlen van politici inzichtelijk te maken. Draag bij aan een beter geïnformeerd publiek debat.
      </p>
      <div className="mt-8 space-x-4">
        <button
          onClick={() => router.push('/analyseer')} // Gebruik de router om te navigeren
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          Start direct een analyse
        </button>
        <button
          onClick={() => router.push('/bot')} // Gebruik de router
          className="bg-gray-700 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out"
        >
          Bekijk de Analyse-Bot
        </button>
      </div>
    </div>
  );
}
