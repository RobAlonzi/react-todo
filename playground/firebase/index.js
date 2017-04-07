import firebase from "firebase";

var config = {
	apiKey: "AIzaSyCBFJttjQiRm8BL71Xpw8NYZB9Trg_Kkro",
	authDomain: "todoapp-52d91.firebaseapp.com",
	databaseURL: "https://todoapp-52d91.firebaseio.com",
	projectId: "todoapp-52d91",
	storageBucket: "todoapp-52d91.appspot.com",
	messagingSenderId: "805407986582"
};

firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: "Todo App",
		version: "1.0"
	},
	isRunning: true,
	user: {
		name: "Rob",
		age: 27
	}
});

// firebaseRef.update({
// 	isRunning: false,
// 	'app/name': 'Todo Application'
// });

// firebaseRef.child("app").update({
// 	name: "Todo Application 2"
// }).then(() => {
// 	console.log("Update Worked");
// }, (e) => {
// 	console.log("Update Failed");
// });


// firebaseRef.update({
// 	'app/name' : "Todo Application",
// 	'user/name' : "Tom"
// });

// firebaseRef.child("app").update({
// 	version: "1.5"
// });

// firebaseRef.child("user").update({
// 	age: 29
// })


// firebaseRef.child("app/name").remove();
// firebaseRef.child("app").update({
// 	version: '2.0',
// 	name: null
// })

// firebaseRef.update({
// 	isRunning: null
// });

// firebaseRef.child("user/age").remove();

// firebaseRef.child("app").once("value").then((snapshot) => {
// 	console.log('Got entire db', snapshot.key ,snapshot.val());
// }, (e) =>{
// 	console.error("Unable to fetch value", e);
// });


// var logData = (snapshot) => {
// 	console.log("Got value", snapshot.val());
// };

// firebaseRef.on("value", logData);

// firebaseRef.off("value", logData);

// firebaseRef.update({isRunning: false});

// firebaseRef.child("user").on("value", (snapshot) => {
// 	console.log("Got value", snapshot.val());
// });

// firebaseRef.update({
// 	'user/name': "Mike"
// });

// firebaseRef.update({
// 	'app/name' : "My app"
// });


// var notesRef = firebaseRef.child("notes");
// notesRef.on("child_added", (snapshot) => {
// 	console.log("child_added", snapshot.key, snapshot.val())
// });

// notesRef.on("child_changed", (snapshot) => {
// 	console.log("child_changed", snapshot.key, snapshot.val())
// });



// notesRef.on("child_removed", (snapshot) => {
// 	console.log("child_removed", snapshot.key, snapshot.val())
// });


// var newNoteRef = notesRef.push({
// 	text: "Walk the dog!"
// });

var todosRef = firebaseRef.child("todos");
todosRef.on("child_added", (snapshot) => {
	console.log("todo added: ", snapshot.key, snapshot.val());
})

todosRef.push({
	text: "Walk the dog!"
});

todosRef.push({
	text: "Film my video"
});