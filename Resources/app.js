// mvc includes
Ti.include("/include/inheritance.js");
Ti.include("/include/mvc.js");

// controller includes
Ti.include("/controllers/loginController.js");

var loginWin = Ti.UI.createWindow({ exitOnClose : true });
var loginController = new LoginController(loginWin);

loginWin.open();


