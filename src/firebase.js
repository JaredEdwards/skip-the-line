import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA1D4mCOGwIMw74_SRJdzurTBasYdg16k0',
  authDomain: 'skip-the-line-6b9d1.firebaseapp.com',
  databaseURL: 'https://skip-the-line-6b9d1.firebaseio.com',
  projectId: 'skip-the-line-6b9d1',
  storageBucket: 'skip-the-line-6b9d1.appspot.com',
  messagingSenderId: '481139863060'
};

firebase.initializeApp(config);

export default firebase;

//export an instance of the firebase db
export const database = firebase.database();
