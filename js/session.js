var Session = (function() {
	var loggedIn = false;
	var nickName;

	function authStateChangeListener(user) {
		console.log("Auth state change: ", user);
		console.log("Entered Name: ", nickName);

		if (user != null) {
			user.updateProfile({
				displayName: nickName,
				photoURL: ''
			});
			console.log("User info: ", user.displayName);
		}
	}

	/*
	* Sign in anonymously
	*/
	function signInAnonymously() {
		nickName = document.getElementById('displayName').value;
		firebase.auth().signInAnonymously();
	}

	function signOut() {
		displayName = null;
		firebase.auth().signOut();
	}


	return {
		init: function() {
			firebase.auth().onAuthStateChanged(authStateChangeListener);
			document.getElementById('btnCreate').addEventListener('click', signInAnonymously);
			document.getElementById('btnJoin').addEventListener('click', signInAnonymously);
			document.getElementById('btnEnd').addEventListener('click', signOut);
		}
	}

})();
