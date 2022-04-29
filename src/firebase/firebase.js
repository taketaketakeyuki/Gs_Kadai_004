import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBg5A67BfQv4eb2rtdmnLWB-Ul-Y_mX6_w",
  authDomain: "test-94a01.firebaseapp.com",
  databaseURL: "https://test-94a01-default-rtdb.firebaseio.com",
  projectId: "test-94a01",
  storageBucket: "test-94a01.appspot.com",
  messagingSenderId: "601248224116",
  appId: "1:601248224116:web:4eb2baf3a01768204f5221"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
