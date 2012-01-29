Ti.include("../views/loginView.js");

var LoginController = Controller.extend({
    init: function(win) {
        this._super(win);

        this.view = new LoginView(win, this);
    },
    
    btnLoginClick: function(e, email, password) {
		
		var loginRequest = Titanium.Network.createHTTPClient();
		loginRequest.open('POST', 'http://taskapi.heroku.com/users/login');
		loginRequest.onload = function(){
			if(this.responseText != "false")
			{
				// set userID global variable
				Ti.App.Properties.setString("userID", this.responseText);
				
				// fire changeScreen event
				Ti.App.fireEvent('loggedIn', e);
			}
			else
			{
				alert("Oops! Something went wrong. Please try again.");
			}	
		}
		loginRequest.send({email:email, password:password});
    },
    
    btnRegisterClick: function(e) {
		Titanium.Platform.openURL('http://www.drupal.be');
    },
    
    logout: function(e) {
		Ti.App.Properties.removeProperty('userID');
		Ti.App.fireEvent("changeScreen", { changeTo : "loginView" });
    }
});

