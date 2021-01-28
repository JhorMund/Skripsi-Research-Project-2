import firebase from '../components/config/firebase';
import Router from "next/router";
    firebase.auth().signOut().then(() => {
        Router.push('/login')
      }).catch((error) => {
        console.log('failed')
      });

