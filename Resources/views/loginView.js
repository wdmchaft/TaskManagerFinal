var LoginView = View.extend({
    init: function(win, controller) {
        this._super(win, controller);
        this.layout();
    },

    layout: function() {
	    // createView instead of createWindow
		// we're adding a view to the window (win, coming from the controller == Ti.UI.currentWindow)
		var loginScreen = Titanium.UI.createView({
			title : 'Log in',
			backgroundImage : '/images/bg.jpg'
		});

		
		var logo = Titanium.UI.createView({
		   backgroundImage : '/images/logo.png',
		   width:190,
		   height:112, 
		   top:10
		});

		var strDescription = Titanium.UI.createLabel({
			top : '135',
			text : "Mobile Task Manager is a mobile application to help you manage your tasks.",
			height : '35',
			width : '80%',
			color : "#333",
			font : {
				fontSize : 12
			}
		});
		var strLogin = Titanium.UI.createLabel({
			top : '185',
			text : "Login:.",
			height : '35',
			width : '80%',
			color : "#333",
			font : {
				fontSize : 14
			}
		});
		var txtName = Titanium.UI.createTextField({
			hintText : 'Name',
			top : '220',
			borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			backgroundImage : '/images/input.png',
			height : '35',
			width : '270', 
			paddingLeft:10
		});

		var txtPass = Titanium.UI.createTextField({
			hintText : 'Password',
			top : '265',
			borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			passwordMask : true,
			backgroundImage : '/images/input.png',
			height : '35',
			width : '270', 
			paddingLeft:10
		});

		var btnLogin = Titanium.UI.createButton({
			title : 'Log in',
			top : '310',
			height : '50',
			width : '270',
			backgroundImage : '/images/button.png'
		});
		var strRegister = Titanium.UI.createLabel({
			top : '360',
			text : "You can register here.",
			height : '35',
			width : '80%',
			color : "#333",
			font : {
				fontSize : 11
			}
		});

		// add the UI components to the window and open it
		loginScreen.add(logo);
		loginScreen.add(txtName);
		loginScreen.add(txtPass);
		loginScreen.add(btnLogin);
		loginScreen.add(strDescription);
		loginScreen.add(strLogin);
		loginScreen.add(strRegister);

		// add the view to the currentWindow
		this.win.add(loginScreen);
    }
});
