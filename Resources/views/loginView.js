var LoginView = View.extend({
    init: function(win, controller) {
        this._super(win, controller);
        this.layout();
    },

    layout: function() {

		this.win.title = 'Log in';
		this.win.backgroundImage = '/images/bg.jpg';
		
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
		this.win.add(logo);
		this.win.add(txtName);
		this.win.add(txtPass);
		this.win.add(btnLogin);
		this.win.add(strDescription);
		this.win.add(strLogin);
		this.win.add(strRegister);
		
		btnLogin.addEventListener('click', function(e)	{
			loginController.btnLoginClick(e, txtName.value, txtPass.value);
		});
		
		strRegister.addEventListener('click', this.controller.btnRegisterClick);

    }
});
