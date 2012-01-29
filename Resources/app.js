// mvc includes
Ti.include("/include/inheritance.js");
Ti.include("/include/mvc.js");

// controller includes
Ti.include("/controllers/loginController.js");

var loginWin = Ti.UI.createWindow({ exitOnClose : true });
var loginController = new LoginController(loginWin);


Ti.App.addEventListener("changeScreen", function(e)
{
	switch(e.changeTo)
	{
		case 'showTaskView':
			Ti.API.info("showing task view");
			//nav.open(taskView, { animated : true });
			break;
	}
});

loginWin.open();


