import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBzfujOigmntYT-XNvjWreIRCqwo9fe9UE",
  authDomain: "fir-mapreactnative.firebaseapp.com",
  databaseURL: "https://fir-mapreactnative.firebaseio.com",
  projectId: "fir-mapreactnative",
  storageBucket: "fir-mapreactnative.appspot.com",
  messagingSenderId: "481689674092"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
