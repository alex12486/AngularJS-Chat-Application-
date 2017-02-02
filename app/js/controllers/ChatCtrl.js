function chatCtrl(ChatService, $firebaseAuth) {
	var vm = this;
	var auth = $firebaseAuth();

	vm.messages = ChatService.getMessages();
	vm.shownMessages = ChatService.shownMessages();


	vm.sendMessage = function(){

		var message = {
			authorName: vm.author.displayName,
			authorId: vm.author.uid,
			authorPhoto: vm.author.photoURL,
			text: vm.newMessage
		}

		if(vm.newMessage != '') {
			ChatService.sendMessage(message);
			vm.newMessage = '';
		}
	}

	vm.login = function() {
		auth.$signInWithPopup('google');
	}

	vm.logout = function() {
		auth.$signOut();
	}

	auth.$onAuthStateChanged(function(authData) {
		vm.author = authData;
		console.log(authData);
	});

}

angular.module('Chat')
.controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl]);