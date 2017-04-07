import firebase from "firebase";

try{
	var config = {
		apiKey: "AIzaSyCBFJttjQiRm8BL71Xpw8NYZB9Trg_Kkro",
		authDomain: "todoapp-52d91.firebaseapp.com",
		databaseURL: "https://todoapp-52d91.firebaseio.com",
		projectId: "todoapp-52d91",
		storageBucket: "todoapp-52d91.appspot.com",
		messagingSenderId: "805407986582"
	};

	firebase.initializeApp(config);

} catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;