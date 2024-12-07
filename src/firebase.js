import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCZ9VupVh3StloRHzAQw89YahWez9EsQFA",
    authDomain: "bsq-auth.firebaseapp.com",
    projectId: "bsq-auth",
    storageBucket: "bsq-auth.firebasestorage.app",
    messagingSenderId: "919008164014",
    appId: "1:919008164014:web:dcb6b428062d56bed5553f",
    measurementId: "G-MZ3NSH5JY0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };

const analytics = getAnalytics(app);
