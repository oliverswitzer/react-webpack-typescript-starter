import firebase from 'firebase';

const config = {
    apiKey: `${process.env.FIREBASE_API_KEY}`,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_DATABASE_NAME}firebaseio.com`,
    storageBucket: `${process.env.FIREBASE_BUCKET}.appspot.com`
};
firebase.initializeApp(config)