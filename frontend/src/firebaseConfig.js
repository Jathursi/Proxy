import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyABh4m7dII9BaXhp_VYHFp0VarLrXFTcS8",
    authDomain: "proxysetup-55444.firebaseapp.com",
    projectId: "proxysetup-55444",
    storageBucket: "proxysetup-55444.firebasestorage.app",
    messagingSenderId: "77851673322",
    appId: "1:77851673322:web:1e37aca69596cabe0f0d93",
    measurementId: "G-LZWPFKKM59"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;