import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDU7AtNdRBRPOzkh1DzsXunBRStvlT4Bmc",
  authDomain: "justlog-2fc80.firebaseapp.com",
  projectId: "justlog-2fc80",
  storageBucket: "justlog-2fc80.firebasestorage.app",
  messagingSenderId: "788110752670",
  appId: "1:788110752670:web:8036efc5dfff638b78348f",
  measurementId: "G-3TY7T3JVY4",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const initAnalytics = async () => {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};
