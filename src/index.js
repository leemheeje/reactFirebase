import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
firebase.initializeApp(firebaseConfig);
firebase.analytics();



ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);

// firebase.auth().signInWithEmailAndPassword('test@gmail.com', '123123').then(res => {
// 	console.log(res);
// })
// firebase.auth().onAuthStateChanged(res => {
// 	console.log(res);
// 	if (res) {
// 		ReactDOM.render(
// 			<React.StrictMode>
// 				<App />
// 			</React.StrictMode>,
// 			document.getElementById('root')
// 		);
// 	} else {
// 		console.log('로그인필요합니다.');
// 	}
// })

serviceWorker.unregister();
