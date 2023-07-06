import firebase from './firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBguf9Yq5OVuIyqZLk67Lac1MuxvVmYZ-8",
    authDomain: "netflix-clone-dcea8.firebaseapp.com",
    projectId: "netflix-clone-dcea8",
    storageBucket: "netflix-clone-dcea8.appspot.com",
    messagingSenderId: "676263727978",
    appId: "1:676263727978:web:63195cbab8da83514c0b13",
    measurementId: "G-N0QCFT365G"
  };
  const firebaseApp=firebase.initalizeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{auth};
  export default db;