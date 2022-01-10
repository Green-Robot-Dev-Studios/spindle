import { initializeApp,  } from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBMdbaTyH53VqNapqqS3eabRPpMcNxBrJc",
    authDomain: "life-360-finder-1520426725544.firebaseapp.com",
    databaseURL: "https://life-360-finder-1520426725544.firebaseio.com",
    projectId: "life-360-finder-1520426725544",
    storageBucket: "life-360-finder-1520426725544.appspot.com",
    messagingSenderId: "525447333235",
    appId: "1:525447333235:web:9e4c0c044e86d6a243f106",
};

const app = initializeApp(firebaseConfig);

export default app;
