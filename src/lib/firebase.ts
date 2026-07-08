import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported, logEvent as fbLogEvent, Analytics } from "firebase/analytics";

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
let analyticsInstance: Analytics | null = null;

export const initAnalytics = async () => {
  if (await isSupported()) {
    analyticsInstance = getAnalytics(app);
    return analyticsInstance;
  }
  return null;
};

export const logEvent = async (eventName: string, params?: Record<string, unknown>) => {
  if (!analyticsInstance) {
    if (await isSupported()) {
      analyticsInstance = getAnalytics(app);
    } else return;
  }
  fbLogEvent(analyticsInstance, eventName, params);
};
