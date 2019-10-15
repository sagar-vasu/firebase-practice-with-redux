import firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDczxsjrPnkKRE3qZkRiZtTNL_ywalKJwo",
    authDomain: "firbase-practice-1e7c6.firebaseapp.com",
    databaseURL: "https://firbase-practice-1e7c6.firebaseio.com",
    projectId: "firbase-practice-1e7c6",
    storageBucket: "firbase-practice-1e7c6.appspot.com",
    messagingSenderId: "1030272984410",
    appId: "1:1030272984410:web:71162db8f9ef86cbd6ff63",
    measurementId: "G-0QZMD0GEH2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase