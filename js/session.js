var Session = (function() {
	var loggedIn = false;

	function authStateChangeListener(user) {
		console.log("Auth state change: ", user);
	}

	/*
	* Sign in anonymously
	*/
	function signInAnonymously() {
		firebase.auth().signInAnonymously();
	}


	return {
		init: function() {
			firebase.auth().onAuthStateChanged(authStateChangeListener);

			document.getElementById('btnLogin').addEventListener('click', signInAnonymously);
			document.getElementById('btnLogout').addEventListener('click', function() {
				firebase.auth().signOut().then(function() {
					console.log('Signed Out');
				});
			});
		}
	}

})();
