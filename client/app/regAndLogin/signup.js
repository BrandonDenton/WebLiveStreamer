import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		register() {
			let { username, email, password, passConfirm } = this.getProperties('username', 'email', 'password', 'passConfirm');

			for(let str of [username, email, password, passConfirm]) {
				if(!str) {
					this.set('errorMessage', 'Please fill out all the info to finish making your account.');
					return;
				}
			}
			
			// Make sure the passwords in the forms match to tell you're not registering a robot.
			if(password!=passConfirm) {
				this.set('errorMessage', 'Your submitted passwords do not match. Please fix that.');
				return;
			}  // Oh, and check for all the form data is filled in.
			for(let str of [username, email, password, passConfirm]) {
				if(!str) {
					this.set('errorMessage', 'Please fill out all the info to finish making your account.');
					return;
				}
			}
			
			// Decide whether to register after form checking.
			this.get('signup').newUser(username, email, password).then(() => {
				this.get('session').authenticate('authenticator:application', username, password)
			}, (err) => {
				switch(err.status) {
					case 404:
						this.set('errorMessage', 'Cannot contact the server. Please stand by and report further problems.');
						break;
					default:
						this.set('errorMessage', '${err.status}');
				}
			});
		}
	}

})