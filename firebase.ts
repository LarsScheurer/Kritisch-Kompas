// Importeer de benodigde functies van de Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// De configuratie van je Firebase project.
// Deze leest de "Environment Variables" die je in Vercel hebt ingesteld.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialiseer de Firebase app
const app = initializeApp(firebaseConfig);

// Haal de Firestore database instantie op
const db = getFirestore(app);

// Exporteer de database instantie zodat je hem in andere bestanden kunt gebruiken
export { db };
